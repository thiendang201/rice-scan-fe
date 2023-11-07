import React, { useContext, useEffect, useRef } from 'react';
import HistoryItem from '@/features/history/components/HistoryScanItem';
import { LichSu } from '@/types/common';
import { useRouter } from 'next/router';
import { historyContext } from '@/features/history/contexts/HistoryContext';

export default function HistoryScanList() {
  const { historyList } = useContext(historyContext);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const router = useRouter();

  const onHistoryClick = (pestId: string) => () => router.push(`/pest/${pestId}/details`);

  const HistoryElementList = historyList.map((history) => (
    <HistoryItem
      key={history.ma_lich_su}
      {...history}
      onClick={onHistoryClick(history.ma_sau_benh)}
    />
  ));

  return (
    <div className="mt-12 pb-9 pt-6 bg-white z-10 relative">
      <h2
        ref={headingRef}
        className="font-bold px-7 text-base sticky top-0 left-0 w-full pt-6 pb-4 bg-white/80 backdrop-blur-md"
      >
        Tải lên gần đây
      </h2>
      <div className="flex flex-col gap-6 px-7">
        {HistoryElementList}
        {!historyList.length && <h2 className="text-center mt-10">Trống!</h2>}
      </div>
    </div>
  );
}
