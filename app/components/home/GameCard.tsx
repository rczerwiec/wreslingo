'use client';

import React, { ReactNode } from 'react';

interface GameCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  onClick,
  disabled = false
}) => {
  return (
    <div className="group relative">
      <div className={`relative overflow-hidden rounded-xl transition-all duration-300 border
        ${disabled 
          ? 'bg-black/20 backdrop-blur-sm border-white/5' 
          : 'bg-black/30 backdrop-blur-md border-white/10 hover:shadow-2xl hover:shadow-blue-500/20'
        }`}
      >
        {!disabled && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
        <div className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-bold ${disabled ? 'text-gray-400' : 'text-white group-hover:text-blue-300 transition-colors duration-300'}`}>
              {title}
            </h3>
            <span className={`${disabled ? 'text-gray-500' : 'text-blue-300 group-hover:text-white transition-colors duration-300'}`}>
              {icon}
            </span>
          </div>
          <p className={`mb-6 ${disabled ? 'text-gray-400' : 'text-blue-200 group-hover:text-white transition-colors duration-300'}`}>
            {description}
          </p>
          
          {disabled ? (
            <div className="w-full h-12 bg-white/5 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">{buttonText}</span>
            </div>
          ) : (
            <button
              onClick={onClick}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg transform hover:scale-[1.02] transition-all duration-300 font-medium"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard; 