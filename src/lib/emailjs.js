import emailjs from '@emailjs/browser'

// Configuração EmailJS
const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// Inicializar EmailJS
emailjs.init(EMAIL_PUBLIC_KEY)

export const emailService = {
  async sendContactForm(formData) {
    try {
      const templateParams = {
        from_name: formData.nome,
        from_email: formData.email,
        phone: formData.telefone || 'Não informado',
        service: formData.servico || 'Não especificado',
        message: formData.mensagem,
        to_name: 'CalangoFlux',
        reply_to: formData.email
      }

      const response = await emailjs.send(
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

  async sendLeadNotification(leadData) {
    try {
      const templateParams = {
        from_name: leadData.nome,
        from_email: leadData.email,
        phone: leadData.telefone || 'Não informado',
        interest: leadData.interesse || 'Não especificado',
        message: `Novo lead capturado: ${leadData.nome} demonstrou interesse em ${leadData.interesse}`,
        to_name: 'CalangoFlux',
        reply_to: leadData.email
      }

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        'template_lead_notification', // Template específico para leads
        templateParams
      )

      return response
    } catch (error) {
      console.error('Erro ao enviar notificação de lead:', error)
      throw error
    }
  },

  async sendWelcomeEmail(subscriberData) {
    try {
      const templateParams = {
        to_name: subscriberData.nome || 'Novo Assinante',
        to_email: subscriberData.email,
        from_name: 'CalangoFlux',
        message: 'Bem-vindo à comunidade CalangoFlux! Obrigado por se inscrever em nossa newsletter.'
      }

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        'template_welcome', // Template de boas-vindas
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
export const emailTemplates = {
  contact: 'template_contact',
  lead: 'template_lead_notification',
  welcome: 'template_welcome',
  newsletter: 'template_newsletter'
}

// Validação de email
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Formatação de dados para templates
export const formatEmailData = (data, type) => {
  const baseData = {
    timestamp: new Date().toLocaleString('pt-BR'),
    from_name: 'CalangoFlux',
    ...data
  }

  switch (type) {
    case 'contact':
      return {
        ...baseData,
        subject: `Novo contato de ${data.nome}`,
        message: data.mensagem
      }
    
    case 'lead':
      return {
        ...baseData,
        subject: `Novo lead: ${data.nome}`,
        message: `Interesse em: ${data.interesse}`
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