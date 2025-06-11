import React from 'react';

const CountryCard = ({ name, flagUrl }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        backgroundColor: '#fff',
        width: '220px',
        transition: 'transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={flagUrl}
        alt={`${name} flag`}
        style={{ width: '40px', height: '28px', borderRadius: '4px', objectFit: 'cover' }}
      />
      <div style={{ fontSize: '16px', fontWeight: '600', color: '#2d3748' }}>{name}</div>
    </div>
  );
};

export default CountryCard;