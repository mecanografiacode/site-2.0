import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Colégio Reação" 
      className={className}
    />
  );
};