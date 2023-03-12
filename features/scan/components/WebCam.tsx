import CircleButton from '@/common/components/Button/CircleButton';
import CameraFocusIcon from '@/assets/icons/camera-focus-icon.svg';
import useWindowSize from '@/common/hooks/useWindowSize';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Image from 'next/image';

export interface WebCamProps {}

export default function WebCam(props: WebCamProps) {
  const { width, height } = useWindowSize();
  const [imagePreview, setImagePreview] = useState('');
  const webcamRef = useRef<Webcam>(null);
  const videoConstraints = {
    width,
    height,
    facingMode: 'user',
  };

  const onCapture = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImagePreview(imageSrc ?? '');
  }, [webcamRef]);

  return (
    <div className="h-screen relative">
      <Webcam
        audio={false}
        minScreenshotHeight={height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        imageSmoothing
        mirrored
        minScreenshotWidth={width}
        videoConstraints={videoConstraints}
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
      {/* <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black/80" /> */}
      <CameraFocusIcon className="absolute top-36 left-1/2 -translate-x-1/2" />
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
