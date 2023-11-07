import axiosClient from '@/services/axiosInstant';
import { SauBenh } from '@/types/common';

export const predict = (file: File) => axiosClient.postForm<SauBenh>('/predict', { file });
export const getPest = (id: string) => axiosClient.get<SauBenh>('/pest/get', { params: { id } });
