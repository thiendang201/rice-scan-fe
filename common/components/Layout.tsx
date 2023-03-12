import React, { ReactNode } from 'react';
import Header from '@/common/components/Header';

interface LayoutProps {
  children: ReactNode;
  showBackButton?: boolean;
}

export default function Layout({ children, showBackButton = false }: LayoutProps) {
  return (
    <div className="bg-background">
      <Header showBackButton={showBackButton} />
      <main>{children}</main>
    </div>
  );
}
