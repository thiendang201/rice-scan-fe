import React, { useCallback, useState } from 'react';
import UploadIcon from '@/assets/icons/cloud-upload-icon.svg';
import UploadImage from '@/assets/imgs/upload-image.png';
import FullScreenPreviewImage from '@/features/scan/components/FullScreenPreviewImage';
import Image from 'next/image';
import { FileRejection, useDropzone } from 'react-dropzone';
import { useMobile } from '@/common/hooks/useMobile';
import useDisClosure from '@/common/hooks/useDisClosure';
import { UpLoadErrorPopup } from './UploadErrorPopup';

const MAX_10_MB = 10485760; //In binary

export default function ImageUpload() {
  const isMobile = useMobile();
  const { isOpen, onClose, onOpen } = useDisClosure(false);
  const {
    isOpen: isErrorPopupOpen,
    onClose: onCloseErrorPopup,
    onOpen: onOpenErrorPopup,
  } = useDisClosure(false);

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const hasFiles = acceptedFiles.length > 0;
      const hasErors = rejectedFiles.length > 0;

      hasFiles && onOpen();
      hasErors && onOpenErrorPopup();
    },
    [onOpen, onOpenErrorPopup]
  );

  const handleClosePreview = useCallback(() => {
    onClose();
  }, [onClose]);

  const validator = (file: File) => {
    if (!['image/jpeg', 'image/png'].includes(file.type))
      return {
        code: 'not-support',
        message: 'Chỉ hỗ trợ file có định dạng là JPEG hoặc PNG!',
      };

    if (file.size > MAX_10_MB)
      return {
        code: 'out-of-size',
        message: 'Chỉ hỗ trợ file có kích thước <= 10MB!',
      };

    return null;
  };

  const { getInputProps, fileRejections, acceptedFiles } = useDropzone({
    maxFiles: 1,
    onDrop,
    validator,
  });
  const fileError = fileRejections?.[0]?.errors;

  return (
    <div className="flex items-center flex-col bg-background sticky top-0">
      <div className="mt-16 px-16">
        <Image
          priority
          src={UploadImage}
          className="w-full h-80 object-contain"
          alt={'upload image'}
          width={300}
          height={300}
          quality={100}
        />
      </div>
      <h2 className="font-medium text-lg">Tải lên hình ảnh của bạn</h2>
      <label>
        <div className="shadow-popup mt-7 w-20 h-20 rounded-full flex">
          <UploadIcon className="m-auto w-11 h-11 fill-primary-green" />
        </div>
        <input {...getInputProps()} />
      </label>
      {isMobile && (
        <FullScreenPreviewImage
          isOpen={isOpen}
          image={acceptedFiles[0]}
          onClose={handleClosePreview}
        />
      )}
      <UpLoadErrorPopup
        isOpen={isErrorPopupOpen}
        onClose={onCloseErrorPopup}
        errorMessage={fileError?.[0]?.message}
      />
    </div>
  );
}
