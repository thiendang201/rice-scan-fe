import React, { ReactNode } from 'react';
import SlickSlider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface SliderProps extends Settings {
  children: ReactNode;
}

export function Slider({ children, ...setting }: SliderProps) {
  return <SlickSlider {...setting}>{children}</SlickSlider>;
}
