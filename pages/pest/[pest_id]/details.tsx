import { NextPageWithLayout } from '@/pages/_app';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Slider } from '@/common/components/Slider';
import Image from 'next/image';
import { usePest } from '@/services/apiHooks/usePest';
import { Tab } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { MdIosShare } from 'react-icons/md';
import BackIcon from '@/assets/icons/ep_back.svg';

const PestDetail: NextPageWithLayout = () => {
  const router = useRouter();
  const pestId = router.query.pest_id as string;
  const { data } = usePest(pestId);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabHeadings = ['Triệu chứng', 'Nguyên nhân', 'Giải pháp'];

  const onClose = () => router.push('/');
  const onShare = () =>
    navigator.share &&
    navigator.share({
      text: window.location.href,
      title: `Thông tin về ${data?.ten_sau_benh}`,
    });

  return (
    <div>
      <div className="py-4 bg-white flex items-center px-6 fixed top-0 left-0 right-0 z-10 w-screen">
        <BackIcon className="w-7 h-7 fill-dark-blue" onClick={onClose} />
        <h2 className="mr-auto ml-4 font-semibold text-lg">Thông tin bệnh</h2>
        {/* <MdIosShare className="w-7 h-7 fill-dark-blue" onClick={onShare} /> */}
      </div>
      <div className="mt-[60px] bg-background aspect-video">
        <Slider dots arrows={false}>
          {data?.hinh_anh &&
            data.hinh_anh.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={'anh sau benh'}
                className="aspect-video object-cover w-full"
                width={100}
                height={100}
                quality={100}
                loading="lazy"
              />
            ))}
        </Slider>
        {!data?.hinh_anh && (
          <p className="w-full h-full flex items-center justify-center">Chưa có hình ảnh</p>
        )}
      </div>
      <div className="px-6 py-12">
        <h1 className="font-bold text-2xl">{data?.ten_sau_benh}</h1>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex mt-7 gap-10 border-t w-full border-border-gray overflow-auto touch-auto no-scrollbar">
            {tabHeadings.map((text, index) => (
              <Tab
                key={index}
                className={twMerge(
                  'font-bold text-sm py-2 border-t-4 border-transparent',
                  'whitespace-nowrap opacity-60',
                  'focus:outline-none',
                  selectedIndex === index && 'border-primary-green opacity-100'
                )}
              >
                {text}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-8">
            <Tab.Panel className="whitespace-pre-wrap">{data?.trieu_chung}</Tab.Panel>
            <Tab.Panel className="whitespace-pre-wrap">{data?.nguyen_nhan}</Tab.Panel>
            <Tab.Panel className="whitespace-pre-wrap">{data?.phong_ngua_va_giai_phap}</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default PestDetail;
