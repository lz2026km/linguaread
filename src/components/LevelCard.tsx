import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LevelInfo } from '../types';

interface LevelCardProps {
  level: LevelInfo;
  isSelected: boolean;
  onClick: () => void;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, isSelected, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate('/articles');
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden rounded-2xl p-4 sm:p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 touch-manipulation min-h-[120px] ${
        isSelected ? 'ring-4 ring-indigo-300 ring-offset-2' : ''
      }`}
    >
      {/* 背景渐变 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-90`} />

      {/* 装饰元素 */}
      <div className="absolute -right-4 -top-4 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute -left-2 -bottom-2 w-12 sm:w-16 h-12 sm:h-16 bg-white/10 rounded-full blur-lg" />

      {/* 内容 */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{level.icon}</div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-1">{level.nameZh}</h3>
            <p className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">{level.name}</p>
            <p className="text-white/70 text-xs hidden sm:block">{level.description}</p>
          </div>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/60" />
        </div>
      </div>

      {/* 选中指示器 */}
      {isSelected && (
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-5 sm:w-6 h-5 sm:h-6 bg-white rounded-full flex items-center justify-center">
          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default LevelCard;
