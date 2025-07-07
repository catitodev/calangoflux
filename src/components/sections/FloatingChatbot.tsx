import React, { useState } from 'react'

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState('initial') // initial, interest, contact
  const [userInterest, setUserInterest] = useState('')

  const handleInitialClick = () => {
    setIsOpen(true)
    setStep('interest')
  }

  const handleInterestSelect = (interest) => {
    setUserInterest(interest)
    setStep('contact')
  }

  const handleContactChoice = (platform) => {
    const message = `Olá! Vim do site da CalangoFlux e tenho interesse em: ${userInterest}. 🦎`
    const encodedMessage = encodeURIComponent(message)
    
    if (platform === 'whatsapp') {
      window.open(`https://wa.me/5522988324416?text=${encodedMessage}`, '_blank')
    } else if (platform === 'telegram') {
      window.open(`https://t.me/+5522988324416`, '_blank')
    }
    
    setIsOpen(false)
    setStep('initial')
  }

  const interestOptions = [
    { id: 'agentes', text: '🤖 Agentes de IA', desc: 'Chatbots e assistentes virtuais' },
    { id: 'automacao', text: '⚙️ Automações', desc: 'Processos e workflows inteligentes' },
    { id: 'agentics', text: '🧠 Sistemas Agentics', desc: 'IA que toma decisões complexas' },
    { id: 'webdesign', text: '🎨 Web Design', desc: 'Sites modernos e responsivos' },
    { id: 'web3', text: '📚 Letramento Web3', desc: 'Blockchain e ReFi' },
    { id: 'aideaflux', text: '🚀 AideaFlux', desc: '100+ LLMs gratuitos' },
    { id: 'consultoria', text: '💡 Consultoria', desc: 'Estratégia e planejamento' },
    { id: 'outros', text: '🎯 Outros', desc: 'Outras necessidades' }
  ]

  if (!isOpen) {
    return (
      <div 
        onClick={handleInitialClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          backgroundColor: '#10b981',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(16, 185, 129, 0.3)',
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.boxShadow = '0 6px 25px rgba(16, 185, 129, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)'
        }}
      >
        <span style={{ fontSize: '24px' }}>🦎</span>
        
        <style jsx>{`
          @keyframes pulse {
            0% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 4px 25px rgba(16, 185, 129, 0.5); }
            100% { box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3); }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        width: '380px',
        maxHeight: '500px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
        overflow: 'hidden',
        border: '1px solid #e5e7eb'
      }}
    >
      {/* Header */}
      <div style={{
        backgroundColor: '#10b981',
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>🦎</span>
          <div>
            <div style={{ fontWeight: '600', fontSize: '16px' }}>CalangoBot</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>Assistente da CalangoFlux</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            padding: '4px'
          }}
        >
          ×
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        {step === 'interest' && (
          <div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#1f2937' }}>
              Olá! Em que posso ajudar você? 😊
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6b7280' }}>
              Selecione seu interesse para conversarmos melhor:
            </p>
            <div style={{ display: 'grid', gap: '8px', maxHeight: '300px', overflowY: 'auto' }}>
              {interestOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleInterestSelect(option.text)}
                  style={{
                    background: 'none',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#10b981'
                    e.target.style.backgroundColor = '#f0fdf4'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = '#e5e7eb'
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  <div style={{ fontWeight: '500', fontSize: '14px', color: '#1f2937' }}>
                    {option.text}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '2px' }}>
                    {option.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'contact' && (
          <div>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', color: '#1f2937' }}>
              Perfeito! 🎯
            </h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6b7280' }}>
              <strong>Seu interesse:</strong> {userInterest}
            </p>
            <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#6b7280' }}>
              Escolha como prefere conversar conosco:
            </p>
            
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => handleContactChoice('whatsapp')}
                style={{
                  flex: 1,
                  backgroundColor: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                📱 WhatsApp
              </button>
              
              <button
                onClick={() => handleContactChoice('telegram')}
                style={{
                  flex: 1,
                  backgroundColor: '#0088cc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                ✈️ Telegram
              </button>
            </div>
            
            <button
              onClick={() => setStep('interest')}
              style={{
                width: '100%',
                marginTop: '12px',
                backgroundColor: 'transparent',
                color: '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              ← Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default FloatingChatbot