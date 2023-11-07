import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  className?: string;
}

export function Modal({ children, isOpen, className = '' }: ModalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'initial';

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, [isOpen]);

  useEffect(() => {
    const container = document.getElementById('scan-app');
    setContainer(container);
  }, []);

  return container
    ? isOpen
      ? createPortal(
          <div className={twMerge('fixed z-10 inset-0', className)}>{children}</div>,
          container
        )
      : null
    : null;
}
