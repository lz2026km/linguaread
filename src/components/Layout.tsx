import React from 'react';
import { useLocation } from 'react-router-dom';
import DesktopSidebar from './DesktopSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      <DesktopSidebar />
      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
