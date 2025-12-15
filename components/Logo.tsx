import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 450 120" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
        {/* Defs for gradients/shadows */}
        <defs>
            <filter id="hard-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feFlood floodColor="#8B0000" result="flood"/>
                <feComposite operator="in" in="flood" in2="SourceGraphic" result="composite"/>
                <feOffset dx="4" dy="4" result="offset"/>
                <feComposite operator="over" in="SourceGraphic" in2="offset"/>
            </filter>
        </defs>

        {/* Group for CR Symbol - Skewed for dynamic effect */}
        <g transform="skewX(-12) translate(20, 10)">
            {/* The 3D Depth/Shadow Layer */}
            <text x="5" y="95" fontSize="110" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif" fill="#990000" letterSpacing="-8">CR</text>
            
            {/* The Main Front Layer */}
            <text x="0" y="90" fontSize="110" fontWeight="900" fontFamily="Arial Black, Impact, sans-serif" fill="#D60000" letterSpacing="-8">CR</text>
            
            {/* Highlight/Shine on CR */}
            <path d="M15 25 Q 35 25 35 45" stroke="white" strokeWidth="3" opacity="0.4" fill="none" />
        </g>

        {/* Text Part */}
        <g transform="translate(180, 15)">
             {/* "Colégio" with shadow for depth */}
             <text x="2" y="32" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif" fill="#0f172a" style={{textShadow: '1px 1px 0px rgba(0,0,0,0.1)'}}>Colégio</text>
             
             {/* "REAÇÃO" Outline/Stroke Layer */}
             <text x="0" y="82" fontSize="62" fontWeight="900" fontFamily="Arial Black, sans-serif" stroke="white" strokeWidth="6" fill="none" letterSpacing="1">REAÇÃO</text>
             
             {/* "REAÇÃO" Main Fill Layer */}
             <text x="0" y="82" fontSize="62" fontWeight="900" fontFamily="Arial Black, sans-serif" fill="#1e3a8a" letterSpacing="1">REAÇÃO</text>
             
             {/* Gloss effect on text */}
             <path d="M5 45 L 250 45" stroke="white" strokeWidth="2" opacity="0.1" />
        </g>
    </svg>
  );
};
