import React, { CSSProperties, HTMLAttributes } from 'react';
import Button, { ButtonProps } from '@/common/components/Button/Button';
import { twMerge } from 'tailwind-merge';

interface CircleButtonProps extends ButtonProps {
  size: number;
}

export default function CircleButton({ className, size, ...props }: CircleButtonProps) {
  const style = { '--size': size + 'px' } as CSSProperties;

  return (
    <Button
      {...props}
      style={style}
      className={twMerge('rounded-full w-[var(--size)] h-[var(--size)]', className)}
    />
  );
}
