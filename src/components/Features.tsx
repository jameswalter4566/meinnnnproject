import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState(null);

  const features = [
    {
      id: '1',
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Experience blazing fast load times with our optimized infrastructure and advanced caching technology.',
    },
    {
      id: '2',
      icon: '🔒',
      title: 'Bank-Grade Security',
      description: 'Your data is protected with enterprise-level encryption and multi-factor authentication protocols.',
    },
    {
      id: '3',
      icon: '🌐',
      title: 'Global Scale & Reach',
      description: 'Deploy worldwide with our distributed network spanning across 50+ countries and regions.',
    },
    {
      id: '4',
      icon: '✨',
      title: 'Intuitive Design',
      description: 'Beautiful, user-friendly interface that requires no learning curve and delights every user.',
    },
  ];

  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(180deg, #022c22 0%, #064e3b 100%)',
      minHeight: '100vh',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <span style={{ color: '#34d399', fontSize: '13px', fontWeight: 600 }}>
              PUSHED VIA WEBHOOK
            </span>
          </div>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 800,
            color: '#ecfdf5',
            margin: '0 0 16px',
            background: 'linear-gradient(135deg, #6ee7b7 0%, #34d399 50%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Why Choose Our Platform
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#a7f3d0',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Everything you need to succeed, packed into one powerful solution that scales with your business.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '36px 28px',
                background: hoveredId === feature.id
                  ? 'rgba(16, 185, 129, 0.15)'
                  : 'rgba(6, 78, 59, 0.5)',
                border: '2px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(52, 211, 153, 0.5)'
                  : 'rgba(16, 185, 129, 0.15)',
                borderRadius: '20px',
                transform: hoveredId === feature.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id
                  ? '0 20px 40px rgba(16, 185, 129, 0.2)'
                  : '0 4px 20px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
              }}
            >
              <div style={{
                fontSize: '42px',
                marginBottom: '16px',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ecfdf5',
                margin: '0 0 10px',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#a7f3d0',
                margin: 0,
                lineHeight: 1.6,
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '50px 40px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(52, 211, 153, 0.2)',
        }}>
          <h3 style={{
            fontSize: '30px',
            fontWeight: 800,
            color: '#ecfdf5',
            margin: '0 0 12px',
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#a7f3d0',
            margin: '0 0 28px',
          }}>
            Join thousands of users who have transformed their workflow.
          </p>
          <button style={{
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: 700,
            color: '#022c22',
            background: 'linear-gradient(135deg, #34d399 0%, #6ee7b7 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
          }}>
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}
