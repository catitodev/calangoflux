import { createClient, SupabaseClient } from '@supabase/supabase-js'

// === Database Type Definitions ===

export interface Lead {
  id: string
  nome: string
  email: string
  telefone?: string
  interesse?: string
  origem?: string
  conversa?: string
  status: 'novo' | 'contatado' | 'convertido' | 'perdido'
  prioridade: 'baixa' | 'normal' | 'alta'
  created_at: string
  updated_at: string
}

export interface LeadInsert {
  nome: string
  email: string
  telefone?: string
  interesse?: string
  origem?: string
  conversa?: string
  status?: Lead['status']
  prioridade?: Lead['prioridade']
}

export interface LeadUpdate {
  nome?: string
  email?: string
  telefone?: string
  interesse?: string
  origem?: string
  conversa?: string
  status?: Lead['status']
  prioridade?: Lead['prioridade']
}

export interface ContactForm {
  id: string
  nome: string
  email: string
  telefone?: string
  servico?: string
  mensagem: string
  status: 'pendente' | 'respondido' | 'arquivado'
  created_at: string
  updated_at: string
}

export interface ContactFormInsert {
  nome: string
  email: string
  telefone?: string
  servico?: string
  mensagem: string
}

export interface Subscriber {
  id: string
  email: string
  nome?: string
  data_inscricao: string
  ativo: boolean
  origem?: string
  interesses?: string[]
  created_at: string
}

export interface SubscriberInsert {
  email: string
  nome?: string
  data_inscricao?: string
  origem?: string
  interesses?: string[]
}

export interface ChatConversation {
  id: string
  session_id: string
  user_name?: string
  user_email?: string
  messages: ChatMessageRecord[]
  intent?: string
  lead_captured: boolean
  created_at: string
  updated_at: string
}

export interface ChatConversationInsert {
  session_id: string
  user_name?: string
  user_email?: string
  messages: ChatMessageRecord[]
  intent?: string
  lead_captured?: boolean
}

export interface ChatMessageRecord {
  role: 'user' | 'assistant' | 'system'
  content: string
}

// === Supabase Client ===

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

// === Lead Service ===

export const leadService = {
  async createLead(leadData: LeadInsert): Promise<Lead> {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()

    if (error) throw error
    return data[0] as Lead
  },

  async getLeads(): Promise<Lead[]> {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as Lead[]
  },

  async updateLead(id: string, updates: LeadUpdate): Promise<Lead> {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select()

    if (error) throw error
    return data[0] as Lead
  }
}

// === Contact Service ===

export const contactService = {
  async createContact(contactData: ContactFormInsert): Promise<ContactForm> {
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([contactData])
      .select()

    if (error) throw error
    return data[0] as ContactForm
  },

  async getContacts(): Promise<ContactForm[]> {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data as ContactForm[]
  }
}

// === Subscriber Service ===

export const subscriberService = {
  async subscribe(email: string): Promise<Subscriber> {
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, data_inscricao: new Date().toISOString() }])
      .select()

    if (error) throw error
    return data[0] as Subscriber
  },

  async getSubscribers(): Promise<Subscriber[]> {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('data_inscricao', { ascending: false })

    if (error) throw error
    return data as Subscriber[]
  }
}
