import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://i.imgur.com/LESvkxT.png" 
      alt="Colégio Reação" 
      className={className}
    />
  );
};