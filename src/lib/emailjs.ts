import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser'

// Configuração EmailJS
const EMAIL_SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAIL_TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAIL_PUBLIC_KEY: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

// Inicializar EmailJS
emailjs.init(EMAIL_PUBLIC_KEY)

// === Type Definitions ===

interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  servico?: string
  mensagem: string
}

interface LeadNotificationData {
  nome: string
  email: string
  telefone?: string
  interesse?: string
}

interface SubscriberData {
  nome?: string
  email: string
}

interface ContactTemplateParams {
  [key: string]: unknown
  from_name: string
  from_email: string
  phone: string
  service: string
  message: string
  to_name: string
  reply_to: string
}

interface LeadTemplateParams {
  [key: string]: unknown
  from_name: string
  from_email: string
  phone: string
  interest: string
  message: string
  to_name: string
  reply_to: string
}

interface WelcomeTemplateParams {
  [key: string]: unknown
  to_name: string
  to_email: string
  from_name: string
  message: string
}

type EmailType = 'contact' | 'lead' | 'welcome'

interface BaseEmailData {
  timestamp: string
  from_name: string
  [key: string]: string | undefined
}

interface FormattedContactData extends BaseEmailData {
  subject: string
  message: string
}

interface FormattedLeadData extends BaseEmailData {
  subject: string
  message: string
}

interface FormattedWelcomeData extends BaseEmailData {
  subject: string
  message: string
}

// === Email Service ===

export const emailService = {
  async sendContactForm(formData: ContactFormData): Promise<EmailJSResponseStatus> {
    try {
      const templateParams: ContactTemplateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        phone: formData.telefone || 'Não informado',
        service: formData.servico || 'Não especificado',
        message: formData.mensagem,
        to_name: 'CalangoFlux',
        reply_to: formData.email
      }

      const response: EmailJSResponseStatus = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        templateParams
      )

      return response
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      throw error
    }
  },

  async sendLeadNotification(leadData: LeadNotificationData): Promise<EmailJSResponseStatus> {
    try {
      const templateParams: LeadTemplateParams = {
        from_name: leadData.nome,
        from_email: leadData.email,
        phone: leadData.telefone || 'Não informado',
        interest: leadData.interesse || 'Não especificado',
        message: `Novo lead capturado: ${leadData.nome} demonstrou interesse em ${leadData.interesse}`,
        to_name: 'CalangoFlux',
        reply_to: leadData.email
      }

      const response: EmailJSResponseStatus = await emailjs.send(
        EMAIL_SERVICE_ID,
        'template_lead_notification',
        templateParams
      )

      return response
    } catch (error) {
      console.error('Erro ao enviar notificação de lead:', error)
      throw error
    }
  },

  async sendWelcomeEmail(subscriberData: SubscriberData): Promise<EmailJSResponseStatus> {
    try {
      const templateParams: WelcomeTemplateParams = {
        to_name: subscriberData.nome || 'Novo Assinante',
        to_email: subscriberData.email,
        from_name: 'CalangoFlux',
        message: 'Bem-vindo à comunidade CalangoFlux! Obrigado por se inscrever em nossa newsletter.'
      }

      const response: EmailJSResponseStatus = await emailjs.send(
        EMAIL_SERVICE_ID,
        'template_welcome',
        templateParams
      )

      return response
    } catch (error) {
      console.error('Erro ao enviar email de boas-vindas:', error)
      throw error
    }
  }
}

// Configuração para diferentes tipos de email
export const emailTemplates: Record<string, string> = {
  contact: 'template_contact',
  lead: 'template_lead_notification',
  welcome: 'template_welcome',
  newsletter: 'template_newsletter'
}

// Validação de email
export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Formatação de dados para templates
export const formatEmailData = (
  data: Record<string, string | undefined>,
  type: EmailType
): FormattedContactData | FormattedLeadData | FormattedWelcomeData | BaseEmailData => {
  const baseData: BaseEmailData = {
    timestamp: new Date().toLocaleString('pt-BR'),
    from_name: 'CalangoFlux',
    ...data
  }

  switch (type) {
    case 'contact':
      return {
        ...baseData,
        subject: `Novo contato de ${data.nome ?? 'Visitante'}`,
        message: data.mensagem ?? ''
      }

    case 'lead':
      return {
        ...baseData,
        subject: `Novo lead: ${data.nome ?? 'Visitante'}`,
        message: `Interesse em: ${data.interesse ?? 'Não especificado'}`
      }

    case 'welcome':
      return {
        ...baseData,
        subject: 'Bem-vindo à CalangoFlux!',
        message: 'Obrigado por se juntar à nossa comunidade regenerativa.'
      }

    default:
      return baseData
  }
}
