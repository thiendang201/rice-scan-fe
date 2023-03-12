import * as React from 'react';
import HistoryItem, { HistoryItemProps } from '@/features/history/components/HistoryScanItem';

export interface HistoryScanListProps {
  historyList: HistoryItemProps[];
}

export default function HistoryScanList({ historyList }: HistoryScanListProps) {
  const HistoryElementList = historyList.map((history) => (
    <HistoryItem key={history.id} {...history} />
  ));

  return (
    <div className="mt-12 pb-9 pt-6 bg-white z-10 relative">
      <h2 className="font-bold px-7 text-base sticky top-0 left-0 w-full pt-6 pb-4 bg-white/60 backdrop-blur-md">
        Tải lên gần đây
      </h2>
      <div className="flex flex-col gap-6 px-7">
        {HistoryElementList}
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
        <HistoryItem
          id={'1'}
          image_url={'https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg'}
          date={'2020-12-02 13:21'}
          disease_name={'Bệnh sâu đục thân'}
        />
      </div>
    </div>
  );
}
