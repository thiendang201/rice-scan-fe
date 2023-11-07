import ImageUpload from '@/features/scan/components/ImageUpload';
import { NextPageWithLayout } from '@/pages/_app';
import Layout from '@/common/components/Layout';
import { ReactElement } from 'react';
import HistoryScanList from '@/features/history/components/HistoryScanList';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <ImageUpload />
      <HistoryScanList />
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
