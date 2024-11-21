import React,{ReactNode} from 'react';

export interface ButtonProps extends React.HTMLAttributes<Element> {
  variant?: 'primary' | 'yellow'| 'square';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button ({ 
  children, 
  variant = 'primary', 
  size = 'sm', 
  className = '', 
  ...props 
}:ButtonProps) {
  // ベースのスタイル
  const baseStyles = "rounded-full transition-all duration-200 focus:outline-none focus:ring-2 w-[200px] h-[45px] font-bold";
  
  // バリアントごとのスタイル
  const variantStyles = {
    primary: "bg-indigo-700 text-white hover:bg-indigo-600 focus:ring-blue-500",
    yellow: "bg-amber-400 hover:bg-amber-300 focus:ring-gray-500",
    square: "bg-indigo-700 text-white hover:bg-indigo-600 focus:ring-blue-500 rounded-md",
    // ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
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
