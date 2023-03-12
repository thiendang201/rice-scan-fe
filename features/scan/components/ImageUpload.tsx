import React from 'react';
import UploadImageIcon from '@/assets/icons/upload-image-icon.svg';
import UploadIcon from '@/assets/icons/cloud-upload-icon.svg';
import CircleButton from '@/common/components/Button/CircleButton';
import Link from 'next/link';

interface ImageUploadProps {}

export default function ImageUpload(props: ImageUploadProps) {
  return (
    <div className="flex items-center flex-col bg-background sticky top-0">
      <div className="mt-28">
        <UploadImageIcon />
      </div>
      <h2 className="mt-7 font-medium text-lg">Tải lên hình ảnh của bạn</h2>
      <Link href={'/webcam'}>
        <CircleButton size={84} className="bg-white shadow-popup mt-7">
          <UploadIcon />
        </CircleButton>
      </Link>
    </div>
  );
}
