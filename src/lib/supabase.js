import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Funções para leads e contatos
export const leadService = {
  async createLead(leadData) {
    const { data, error } = await supabase
      .from('leads')
      .insert([leadData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getLeads() {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async updateLead(id, updates) {
    const { data, error } = await supabase
      .from('leads')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  }
}

export const contactService = {
  async createContact(contactData) {
    const { data, error } = await supabase
      .from('contact_forms')
      .insert([contactData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getContacts() {
    const { data, error } = await supabase
      .from('contact_forms')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  }
}

export const subscriberService = {
  async subscribe(email) {
    const { data, error } = await supabase
      .from('subscribers')
      .insert([{ email, data_inscricao: new Date().toISOString() }])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getSubscribers() {
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .order('data_inscricao', { ascending: false })
    
    if (error) throw error
    return data
  }
}