import React from 'react'

const FloatingChatbot = () => {
  return (
    <div 
      id="abacus-chatbot"
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
        transition: 'all 0.3s ease'
      }}
      onClick={() => {
        // Abrir chat do Abacus ou WhatsApp como fallback
        window.open('https://wa.me/5511999999999?text=Olá! Vim do site da CalangoFlux e gostaria de saber mais sobre os serviços.', '_blank')
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
      
      {/* Tooltip */}
      <div
        style={{
          position: 'absolute',
          right: '70px',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          whiteSpace: 'nowrap',
          opacity: '0',
          visibility: 'hidden',
          transition: 'all 0.3s ease'
        }}
        className="tooltip"
      >
        CalangoBot - Clique para conversar! 💬
      </div>
      
      <style jsx>{`
        #abacus-chatbot:hover .tooltip {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </div>
  )
}

export default FloatingChatbot