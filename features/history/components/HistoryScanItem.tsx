import React, { MouseEvent } from 'react';
import Image from 'next/image';
import CircleButton from '@/common/components/Button/CircleButton';
import ArrowForward from '@/assets/icons/arrow-forward-icon.svg';
import { LichSu } from '@/types/common';
import { LOAI_KQ_DU_DOAN } from '@/common/enums/common';
import { formatDistanceToNow, differenceInDays, format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface HistoryItemProps extends LichSu {
  onClick: () => void;
}

export default function HistoryItem({
  hinh_anh,
  tgian_ghi,
  ten_sau_benh,
  loai_sau_Benh,
  onClick,
}: HistoryItemProps) {
  const dayOfWeek = 7;
  const dayCountToNow = differenceInDays(new Date(), tgian_ghi);
  const dateFormat =
    dayCountToNow > dayOfWeek
      ? format(tgian_ghi, 'dd-MM-yyyy HH:mm')
      : formatDistanceToNow(tgian_ghi, { addSuffix: true, locale: vi });

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick();
  };

  return (
    <div className="flex justify-start gap-4 items-center">
      <Image
        src={hinh_anh}
        alt={ten_sau_benh}
        className="rounded-full border-4 border-background aspect-square object-cover"
        width={64}
        height={64}
        loading="lazy"
      />
      <div className="justify-self-start">
        <h3 className="font-semibold">{ten_sau_benh}</h3>
        <p className="text-xs mt-1">{dateFormat}</p>
      </div>
      {loai_sau_Benh === LOAI_KQ_DU_DOAN.co_benh && (
        <CircleButton
          size={48}
          className="ml-auto border-4 border-background"
          onClick={handleClick}
        >
          <ArrowForward className="fill-dark-blue w-6 h-6" />
        </CircleButton>
      )}
    </div>
  );
}
