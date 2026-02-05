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
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
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
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        borderRadius: '50%',
        opacity: 0.1,
        animation: 'float 6s ease-in-out infinite',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'linear-gradient(135deg, #10b981, #06b6d4)',
        borderRadius: '50%',
        opacity: 0.15,
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '1000px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
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
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: '100px',
          marginBottom: '32px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            background: '#10b981',
            borderRadius: '50%',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{ 
            fontSize: '14px', 
            color: '#3b82f6',
            fontWeight: 500,
          }}>
            Now Live - Experience the Future
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          color: '#1f2937',
          lineHeight: 1.1,
          margin: '0 0 24px',
          background: 'linear-gradient(135deg, #1f2937 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Transform Your Digital
          <br />
          Experience Today
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#6b7280',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          Discover a revolutionary platform that combines cutting-edge technology with 
          intuitive design. Join thousands of satisfied users who have already made the switch.
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
                ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                : 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: isHovered
                ? '0 20px 40px rgba(59, 130, 246, 0.4)'
                : '0 10px 30px rgba(59, 130, 246, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Start Free Trial
          </button>

          <button
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: secondaryHovered ? '#3b82f6' : '#6b7280',
              background: secondaryHovered 
                ? 'rgba(59, 130, 246, 0.1)' 
                : 'rgba(255, 255, 255, 0.8)',
              border: '2px solid',
              borderColor: secondaryHovered ? '#3b82f6' : '#e5e7eb',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: secondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            Watch Demo
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
            { value: '50K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '4.9/5', label: 'User Rating' },
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '4px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
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