import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Type of button */
  variant?: 'primary' | 'secondary' | 'danger';
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
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
