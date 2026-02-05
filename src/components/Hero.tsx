import { useState } from 'react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'linear-gradient(135deg, #ff6b6b, #feca57)',
        borderRadius: '50%',
        opacity: 0.15,
        animation: 'float 6s ease-in-out infinite',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #a29bfe, #fd79a8)',
        borderRadius: '50%',
        opacity: 0.2,
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(162, 155, 254, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          background: 'rgba(255, 107, 107, 0.15)',
          border: '1px solid rgba(255, 107, 107, 0.3)',
          borderRadius: '100px',
          marginBottom: '32px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#ff6b6b',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontSize: '14px',
            color: '#ff6b6b',
            fontWeight: 500,
          }}>
            AUTO-SYNC IS WORKING
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#ffffff',
          lineHeight: 1.1,
          margin: '0 0 24px',
          background: 'linear-gradient(135deg, #00f5d4 0%, #00bbf9 50%, #9b5de5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          No Button Needed
          <br />
          It Just Syncs!
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#b2bec3',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Real-time GitHub sync powered by webhooks. Push code from anywhere
          and watch your project update instantly.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#ffffff',
              background: isHovered
                ? 'linear-gradient(135deg, #e84393 0%, #fd79a8 100%)'
                : 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: isHovered
                ? '0 20px 40px rgba(255, 107, 107, 0.4)'
                : '0 10px 30px rgba(255, 107, 107, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Webhook Success!
          </button>

          <button
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: secondaryHovered ? '#a29bfe' : '#b2bec3',
              background: secondaryHovered
                ? 'rgba(162, 155, 254, 0.15)'
                : 'rgba(255, 255, 255, 0.05)',
              border: '2px solid',
              borderColor: secondaryHovered ? '#a29bfe' : 'rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: secondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            Pull Changes
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginTop: '80px',
        }}>
          {[
            { value: '🔔', label: 'Webhook Fired' },
            { value: '✅', label: 'Sync Working' },
            { value: '🚀', label: 'Real-Time' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#b2bec3',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
