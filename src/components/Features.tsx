import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      padding: '120px 24px',
      background: '#ffffff',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#1f2937',
            margin: '0 0 16px',
          }}>
            Why Choose Our Platform
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '40px 32px',
                background: hoveredId === feature.id
                  ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)'
                  : 'rgba(248, 250, 252, 0.5)',
                border: '2px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(59, 130, 246, 0.2)'
                  : 'rgba(226, 232, 240, 0.8)',
                borderRadius: '20px',
                transform: hoveredId === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id
                  ? '0 25px 50px rgba(59, 130, 246, 0.15)'
                  : '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                color: '#1f2937',
                margin: '0 0 12px',
                textAlign: 'center',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                margin: 0,
                lineHeight: 1.6,
                textAlign: 'center',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional CTA Section */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '60px 40px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(226, 232, 240, 0.8)',
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: 700,
            color: '#1f2937',
            margin: '0 0 16px',
          }}>
            Ready to Get Started?
          </h3>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '0 0 32px',
          }}>
            Join thousands of users who have transformed their workflow with our platform.
          </p>
          <button style={{
            padding: '14px 28px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#ffffff',
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
          }}>
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}