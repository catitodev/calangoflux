import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PackageOpen, Send } from 'lucide-react';
import { emailService, validateEmail } from '../lib/emailjs';
import { contactService } from '../lib/supabase';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});

  const validateFields = useCallback((): boolean => {
    const errors: FormErrors = {};

    if (formData.name.length < 2 || formData.name.length > 255) {
      errors.name = 'O nome deve ter entre 2 e 255 caracteres.';
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Informe um e-mail válido (ex: nome@dominio.com).';
    }

    if (formData.message.length < 10 || formData.message.length > 5000) {
      errors.message = 'A mensagem deve ter entre 10 e 5000 caracteres.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof FormErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // Send email via EmailJS
      await emailService.sendContactForm({
        nome: formData.name,
        email: formData.email,
        mensagem: formData.message
      });
    } catch {
      setFormStatus('error');
      setErrorMessage(
        'Não foi possível enviar o e-mail. Tente pelo WhatsApp: +55 22 98832-4416'
      );
      return;
    }

    try {
      // Persist to Supabase
      await contactService.createContact({
        nome: formData.name,
        email: formData.email,
        mensagem: formData.message
      });
    } catch {
      setFormStatus('error');
      setErrorMessage(
        'Mensagem enviada, mas houve um erro ao salvar. Tente pelo WhatsApp: +55 22 98832-4416'
      );
      return;
    }

    // Success
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });

    // Reset after 5 seconds
    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);
  };

  return (
    <section id="contato" className="section bg-[var(--bg-primary)]">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">Vamos conversar?</h2>
          <div className="w-16 h-1 bg-[var(--accent-primary)] mx-auto mb-6"></div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Quer contratar a CalangoFlux ou propor uma parceria?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Entre em contato conosco</h3>

            <div className="space-y-6">
              <a
                href="https://wa.me/5522988324416"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[var(--bg-surface)] rounded-lg hover:bg-[var(--bg-elevated)]/50 transition border border-[var(--bg-elevated)]"
              >
                <div className="bg-[var(--accent-primary)]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[var(--accent-primary)]">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">WhatsApp</h4>
                  <p className="text-[var(--text-muted)]">Resposta rápida em horário comercial</p>
                </div>
              </a>

              <a
                href="https://discord.gg/NjJeB285"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[var(--bg-surface)] rounded-lg hover:bg-[var(--bg-elevated)]/50 transition border border-[var(--bg-elevated)]"
              >
                <div className="bg-[var(--accent-secondary)]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[var(--accent-secondary)]">
                  <PackageOpen size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Discord</h4>
                  <p className="text-[var(--text-muted)]">Conheça nossa comunidade</p>
                </div>
              </a>

              <a
                href="https://t.me/+Uh2Uc5-lNogxMDJh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-[var(--bg-surface)] rounded-lg hover:bg-[var(--bg-elevated)]/50 transition border border-[var(--bg-elevated)]"
              >
                <div className="bg-[var(--accent-primary)]/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 text-[var(--accent-primary)]">
                  <Send size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Telegram</h4>
                  <p className="text-[var(--text-muted)]">Converse com nossa equipe</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-[var(--bg-surface)] border border-[var(--bg-elevated)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-6 text-[var(--text-primary)]">Formulário de Contato</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={255}
                    className="w-full px-4 py-2 bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)]"
                    placeholder="Seu nome"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)]"
                    placeholder="seu.email@exemplo.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    className="w-full px-4 py-2 bg-[var(--bg-primary)] border border-[var(--bg-elevated)] rounded-lg focus:ring-2 focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] transition text-[var(--text-primary)]"
                    placeholder="Como podemos ajudar? (mínimo 10 caracteres)"
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-400">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="bg-green-900/30 border border-green-700 text-green-300 p-3 rounded-lg text-center">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="bg-red-900/30 border border-red-700 text-red-300 p-3 rounded-lg text-center">
                    {errorMessage}
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
