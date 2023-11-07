import React, { CSSProperties, ReactNode, useRef } from 'react';
import Header, { HeaderProps } from '@/common/components/Header';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
interface LayoutProps extends HeaderProps {
  children: ReactNode;
}

export default function Layout({ children, ...props }: LayoutProps) {
  const HeaderRef = useRef<HTMLElement>(null);
  const style = { '--margin-top': HeaderRef.current?.clientHeight + 'px' } as CSSProperties;

  return (
    <div id="scan-app" className="bg-background">
      <Header {...props} ref={HeaderRef} />
      <main style={style} className={twMerge('pt-[var(--margin-top)]')}>
        {children}
      </main>
    </div>
  );
}
