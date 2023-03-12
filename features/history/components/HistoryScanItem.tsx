import React from 'react';
import Image from 'next/image';
import CircleButton from '@/common/components/Button/CircleButton';
import ArrowForward from '@/assets/icons/arrow-forward-icon.svg';

export interface HistoryItemProps {
  id: string;
  image_url: string;
  date: string;
  disease_name: string;
}

export default function HistoryItem({ id, image_url, date, disease_name }: HistoryItemProps) {
  return (
    <div className="flex justify-start gap-4 items-center">
      <Image
        src={image_url}
        alt={disease_name}
        className="rounded-full border-4 border-background"
        width={64}
        height={64}
        priority
      />
      <div className="justify-self-start">
        <h3 className="font-semibold">{disease_name}</h3>
        <p className="text-xs mt-1">{date}</p>
      </div>
      <CircleButton size={48} className="ml-auto border-4 border-background">
        <ArrowForward className="fill-dark-blue" />
      </CircleButton>
    </div>
  );
}
