import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
}

const getButtonStyle = (variant: ButtonProps['variant'] = 'primary') => {
  switch (variant) {
    case 'secondary':
      return {
        background: '#f3f4f6',
        color: '#111827',
        border: '1px solid #d1d5db',
      };
    case 'danger':
      return {
        background: '#ef4444',
        color: '#fff',
        border: 'none',
      };
    case 'primary':
    default:
      return {
        background: '#2563eb',
        color: '#fff',
        border: 'none',
      };
  }
};

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', style, ...props }) => {
  return (
    <button
      style={{
        padding: '0.5rem 1.25rem',
        borderRadius: '0.375rem',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.2s',
        ...getButtonStyle(variant),
        ...style,
      }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
