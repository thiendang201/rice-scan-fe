import classNames from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge('text-center font-semibold flex justify-center items-center', className)}
      {...rest}
    >
      {children}
    </button>
  );
}
