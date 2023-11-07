import * as React from 'react';
import Button from '@/common/components/Button/Button';
import { CiImageOff } from 'react-icons/ci';
import { Modal } from '@/common/components/Modal';

export interface UpLoadErrorPopupProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage: string;
}

export function UpLoadErrorPopup({ isOpen, onClose, errorMessage }: UpLoadErrorPopupProps) {
  return (
    <Modal isOpen={isOpen} className="flex px-6">
      <div className="bg-black/60 absolute top-0 inset-0 z-0" onClick={onClose}></div>
      <div className="m-auto w-full bg-white relative flex flex-col items-center rounded-xl px-6 pb-5 pt-10 mx">
        <CiImageOff size={64} className="fill-border-gray" />
        <h2 className="font-semibold text-toast-danger mt-4">Có lỗi xảy ra!!</h2>
        <p className="text-center text-sm mt-2">{errorMessage}</p>
        <Button className="mt-6 bg-background rounded-full px-10 py-4" onClick={onClose}>
          Quay lại
        </Button>
      </div>
    </Modal>
  );
}
