import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, GraduationCap, PenTool, BookMarked, Library, Bot, Video, Medal, Download, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const { favorites } = useApp();

  const isActive = (path: string): boolean => {
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/articles', icon: BookOpen, label: '阅读' },
    { path: '/ai-assistant', icon: Bot, label: 'AI助手' },
    { path: '/video-learning', icon: Video, label: '视频' },
    { path: '/courses', icon: Library, label: '课程' },
    { path: '/grammar', icon: GraduationCap, label: '语法' },
    { path: '/quiz', icon: PenTool, label: '测试' },
    { path: '/new-words', icon: BookMarked, label: '生词本', badge: favorites.length },
    { path: '/leaderboard', icon: Medal, label: '排行' },
    { path: '/download', icon: Download, label: '下载' },
    { path: '/report', icon: FileText, label: '报告' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40 safe-area-bottom">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors relative ${
                  active
                    ? 'text-indigo-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 ${active ? 'fill-current' : ''}`} />
                  {/* 生词本数量徽章 */}
                  {item.path === '/new-words' && (item.badge && item.badge > 0) && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />
                  )}
                  {active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full" />
                  )}
                </div>
                <span className="text-[10px] sm:text-xs mt-0.5">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;