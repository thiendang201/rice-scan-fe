import { Modal } from '@/common/components/Modal';
import React, { useCallback, useContext, useEffect, useMemo } from 'react';
import BackIcon from '@/assets/icons/ep_back.svg';
import Image from 'next/image';
import { usePredict } from '@/services/apiHooks/usePredict';
import Button from '@/common/components/Button/Button';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { LOAI_KQ_DU_DOAN } from '@/common/enums/common';
import { toBase64 } from '@/helpers/fileHelper';
import { LichSu } from '@/types/common';
import { historyContext } from '@/features/history/contexts/HistoryContext';

export interface FullScreenPreviewImageProps {
  image?: File;
  isOpen: boolean;
  onClose: () => void;
}

export default function FullScreenPreviewImage({
  image,
  isOpen,
  onClose,
}: FullScreenPreviewImageProps) {
  const router = useRouter();
  const { loading, data, error } = usePredict(image);
  const { addHistory } = useContext(historyContext);
  const imageURL = useMemo(() => (image ? URL.createObjectURL(image) : ''), [image]);
  const showResult = !loading && !error;
  const showError = !loading && !!error;
  const isHealthy = data?.loai_sau_benh === LOAI_KQ_DU_DOAN.khong_co_benh;

  const onDetailClick = () => router.push(`/pest/${data?.ma_sau_benh}/details`);

  useEffect(() => {
    const handleAddHistory = async () => {
      if (!image) return;
      const base64Str = await toBase64(image);
      const shouldAddHistory = data && !error;

      if (shouldAddHistory) {
        const historyItem: LichSu = {
          ma_lich_su: Date.now() + '',
          hinh_anh: base64Str,
          tgian_ghi: Date.now(),
          ten_sau_benh: data.ten_sau_benh,
          ma_sau_benh: data.ma_sau_benh,
          loai_sau_Benh: data.loai_sau_benh,
        };

        addHistory(historyItem);
      }
    };

    handleAddHistory();
  }, [addHistory, data, error, image]);

  return (
    <Modal isOpen={isOpen} className="bg-white flex flex-col px-6">
      <div className="py-5 bg-white grid justify-center items-center grid-cols-3">
        <BackIcon className="w-7 h-7 fill-dark-blue mr-auto" onClick={onClose} />
        <h2 className="mx-auto font-bold text-2xl">Lyo Scan</h2>
      </div>
      <div className="aspect-square flex flex-col relative bg-background rounded-md">
        <Image
          width={0}
          height={0}
          src={imageURL}
          alt={'capture preview'}
          className="m-auto object-contain w-full aspect-square rounded-md"
          quality={100}
        />
      </div>
      <div className="flex-1 flex flex-col">
        {loading && <h2 className="m-auto font-medium text-base">Đang xử lý...</h2>}
        {showResult && (
          <div className="m-auto text-center">
            <p className="font-medium text-lg">Kết quả</p>
            <h2
              className={twMerge(
                'font-bold text-2xl mb-1',
                data?.loai_sau_benh === LOAI_KQ_DU_DOAN.co_benh && 'text-primary-purple',
                data?.loai_sau_benh === LOAI_KQ_DU_DOAN.khong_co_benh && 'text-primary-green'
              )}
            >
              {data?.ten_sau_benh}
            </h2>
          </div>
        )}
        {showError && (
          <h2 className="m-auto font-medium text-base text-toast-danger">Đã có lỗi xảy ra!</h2>
        )}
        {!loading && (
          <Button
            className={twMerge(
              'border-4 border-background rounded-full py-4 mb-6',
              'text-center text-white text-lg',
              showResult && 'bg-primary-green',
              showError && 'bg-background text-dark-blue'
            )}
            onClick={isHealthy ? onClose : showResult ? onDetailClick : undefined}
          >
            {isHealthy ? 'Quay lại' : showResult ? 'Xem chi tiết' : 'Thử lại'}
          </Button>
        )}
      </div>
    </Modal>
  );
}
