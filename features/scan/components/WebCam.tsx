import CircleButton from '@/common/components/Button/CircleButton';
import CameraFocusIcon from '@/assets/icons/camera-focus-icon.svg';
import { useWindowSize } from '@/common/hooks/useWindowSize';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';
import { useScreenHeight } from '@/common/hooks/useScreenHeight';

export default function WebCam() {
  const heightVariant = useScreenHeight();
  const { width, height } = useWindowSize();
  const [imagePreview, setImagePreview] = useState('');
  const webcamRef = useRef<Webcam>(null);

  const onCapture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImagePreview(imageSrc ?? '');
  }, [webcamRef]);

  return (
    <div style={{ height: `var(${heightVariant})` }} className="relative">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        imageSmoothing
        mirrored
        videoConstraints={{
          facingMode: 'environment',
        }}
        screenshotQuality={1}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: '50%',
          marginLeft: '-50%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <CircleButton
        size={90}
        onClick={onCapture}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 border-6 border-white"
      />

      {/* Image Capture */}
      {imagePreview && (
        <Image
          width={width}
          height={height}
          src={imagePreview}
          alt={'capture preview'}
          className="absolute h-full w-full object-cover"
        />
      )}
    </div>
  );
}
