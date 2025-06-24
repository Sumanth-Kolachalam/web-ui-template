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

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', ...props }) => {
  return (
    <button style={getButtonStyle(variant)} {...props}>
      {label}
    </button>
  );
};

export default Button;
