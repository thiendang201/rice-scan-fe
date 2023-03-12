import React from 'react';
import ArrowForward from '@/assets/icons/arrow-forward-icon.svg';
import { useRouter } from 'next/router';
import Button from './Button/Button';
import { twMerge } from 'tailwind-merge';

export interface HeaderProps {
  showBackButton?: boolean;
  textDark?: boolean;
}

export default function Header({ showBackButton = false, textDark = true }: HeaderProps) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <header
      className={twMerge(
        'text-center font-semibold text-2xl',
        'fixed top-0 left-0 w-full z-10 py-5 px-6',
        'grid grid-cols-3 items-center justify-between',
        !textDark && 'text-white'
      )}
    >
      {showBackButton ? (
        <Button className="inline-block" onClick={onBack}>
          <ArrowForward
            className={twMerge('rotate-180', !textDark && 'text-white')}
            stroke="rgba(0,0,0,10%)"
          />
        </Button>
      ) : (
        <div></div>
      )}
      <span className="text-shadow-normal">Lyo Scan</span>
    </header>
  );
}
