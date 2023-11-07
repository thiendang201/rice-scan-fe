import React, { PropsWithChildren, forwardRef } from 'react';
import ArrowForward from '@/assets/icons/arrow-forward-icon.svg';
import { useRouter } from 'next/router';
import Button from './Button/Button';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps {
  showBackButton?: boolean;
  className?: string;
  onBack?: () => void;
}

const Header = forwardRef<HTMLElement, PropsWithChildren<HeaderProps>>(
  ({ showBackButton = false, className = '' }, ref) => {
    const router = useRouter();
    const onBack = () => router.back();

    return (
      <header
        ref={ref}
        className={twMerge(
          'text-center font-semibold text-2xl',
          'fixed top-0 left-0 w-full z-10 py-5 px-6',
          'grid grid-cols-3 items-center justify-between',
          className
        )}
      >
        {showBackButton ? (
          <Button className="inline-block" onClick={onBack}>
            <ArrowForward className="rotate-180" stroke="rgba(0,0,0,10%)" />
          </Button>
        ) : (
          <div></div>
        )}
        <span className="text-shadow-normal">Lyo Scan</span>
      </header>
    );
  }
);

Header.displayName = 'Header';

export default Header;
