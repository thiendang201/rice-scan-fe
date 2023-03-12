import React, { ReactNode } from 'react';
import Header, { HeaderProps } from '@/common/components/Header';

interface LayoutProps extends HeaderProps {
  children: ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
  return (
    <div className="bg-background">
      <Header {...props} />
      <main>{children}</main>
    </div>
  );
}
