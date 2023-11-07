import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { SauBenh } from '@/types/common';
import { predict } from '@/services/riceLeafApi';

export const usePredict = (file?: File) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();
  const [data, setData] = useState<SauBenh>();

  const getPrediction = async (file: File) => {
    try {
      setLoading(true);
      const response = await predict(file);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError);
    } finally {
    }
  };

  useEffect(() => {
    file && getPrediction(file);
  }, [file]);

  return {
    loading,
    error,
    data,
  };
};
