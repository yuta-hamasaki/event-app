import React,{ReactNode} from 'react';

export interface ButtonProps extends React.HTMLAttributes<Element> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}:ButtonProps) {
  // ベースのスタイル
  const baseStyles = "rounded-md transition-all duration-200 focus:outline-none focus:ring-2";
  
  // バリアントごとのスタイル
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  };

  // サイズごとのスタイル
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  // すべてのスタイルを結合
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};
