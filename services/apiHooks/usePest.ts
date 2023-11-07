import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SauBenh } from '@/types/common';
import { getPest } from '@/services/riceLeafApi';

export const usePest = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();
  const [data, setData] = useState<SauBenh>();

  const getPestInfo = async (id: string) => {
    try {
      setLoading(true);
      const response = await getPest(id);
      setData(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    id && getPestInfo(id);
  }, [id]);

  return {
    loading,
    error,
    data,
  };
};
