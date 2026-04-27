import React from 'react';
import { BookOpen, Heart, Settings } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface HeaderProps {
  showBack?: boolean;
  title?: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showBack = false, title, onBack }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isVocabulary = location.pathname === '/vocabulary';
  const isSettings = location.pathname === '/settings';

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleVocabularyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/vocabulary');
  };

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/settings');
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const { darkMode } = useApp();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm ${
      darkMode
        ? 'bg-gray-900/95 border-gray-700'
        : 'bg-white/95 border-gray-100'
    }`}>
      <div className="h-14 flex items-center justify-between px-3 sm:px-4">
        {/* 左侧：返回按钮或Logo */}
        <div className="flex items-center">
          {showBack ? (
            <button onClick={handleBack} className={`flex items-center transition-colors ${
              darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'
            }`}>
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">返回</span>
            </button>
          ) : (
            <div onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className={`font-bold text-lg hidden sm:block ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                老刘爱英语
              </span>
            </div>
          )}
        </div>

        {/* 中间：标题 */}
        {title && (
          <h1 className={`text-base font-semibold truncate max-w-[200px] ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h1>
        )}

        {/* 右侧：设置和生词本入口 */}
        <div className="flex items-center space-x-2">
          <div
            onClick={handleVocabularyClick}
            onTouchEnd={(e) => {
              e.preventDefault();
              navigate('/vocabulary');
            }}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isVocabulary
                ? 'bg-indigo-100 text-indigo-600'
                : darkMode
                  ? 'text-gray-400 hover:bg-gray-700 hover:text-indigo-400'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-indigo-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isVocabulary ? 'fill-current' : ''}`} />
          </div>
          <div
            onClick={handleSettingsClick}
            onTouchEnd={(e) => {
              e.preventDefault();
              navigate('/settings');
            }}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              isSettings
                ? 'bg-indigo-100 text-indigo-600'
                : darkMode
                  ? 'text-gray-400 hover:bg-gray-700 hover:text-indigo-400'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-indigo-600'
            }`}
          >
            <Settings className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
