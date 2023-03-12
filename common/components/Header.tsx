import React from 'react';
import ArrowForward from '@/assets/icons/arrow-forward-icon.svg';
import { useRouter } from 'next/router';
import Button from './Button/Button';

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({ showBackButton }: HeaderProps) {
  const router = useRouter();
  const onBack = () => router.back();

  return (
    <header className="text-center text-white py-5 px-6 font-semibold text-2xl fixed top-0 left-0 w-full z-10 grid grid-cols-3 items-center justify-between">
      {showBackButton ? (
        <Button className="inline-block" onClick={onBack}>
          <ArrowForward className="rotate-180 fill-white" />
        </Button>
      ) : (
        <div></div>
      )}
      Lyo Scan
    </header>
  );
}
