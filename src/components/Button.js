import React from 'react';
import cn from '../utils/cn';

export default function Button({ children, className, variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100',
  };
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
