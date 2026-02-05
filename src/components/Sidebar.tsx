import { useState } from 'react';

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'features', icon: '⚡', label: 'Features' },
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
    { id: 'profile', icon: '👤', label: 'Profile' },
  ];

  return (
    <nav style={{
      width: collapsed ? '70px' : '220px',
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #064e3b 0%, #065f46 30%, #047857 100%)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 0',
      transition: 'width 0.3s ease',
      position: 'sticky',
      top: 0,
      boxShadow: '4px 0 20px rgba(0, 0, 0, 0.3)',
      zIndex: 100,
    }}>
      {/* Logo area */}
      <div style={{
        padding: '0 16px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.15)',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
      }}>
        {!collapsed && (
          <span style={{
            fontSize: '20px',
            fontWeight: 800,
            color: '#ecfdf5',
            letterSpacing: '-0.5px',
          }}>
            GreenOS
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#a7f3d0',
            borderRadius: '8px',
            width: '32px',
            height: '32px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            transition: 'all 0.2s ease',
          }}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {/* Nav items */}
      <div style={{ flex: 1, padding: '0 10px' }}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: collapsed ? '0' : '12px',
              justifyContent: collapsed ? 'center' : 'flex-start',
              padding: collapsed ? '14px 0' : '14px 16px',
              marginBottom: '4px',
              background: activeItem === item.id
                ? 'rgba(16, 185, 129, 0.3)'
                : 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: activeItem === item.id ? '#ecfdf5' : '#a7f3d0',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '15px',
              fontWeight: activeItem === item.id ? 600 : 400,
              boxShadow: activeItem === item.id
                ? '0 2px 8px rgba(16, 185, 129, 0.2)'
                : 'none',
            }}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>

      {/* Bottom section */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid rgba(255,255,255,0.15)',
        marginTop: 'auto',
      }}>
        {!collapsed && (
          <div style={{
            background: 'rgba(16, 185, 129, 0.15)',
            borderRadius: '12px',
            padding: '16px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌿</div>
            <div style={{
              color: '#a7f3d0',
              fontSize: '12px',
              lineHeight: 1.4,
            }}>
              Webhook synced
              <br />
              <span style={{ color: '#6ee7b7', fontWeight: 600 }}>Live from GitHub</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
