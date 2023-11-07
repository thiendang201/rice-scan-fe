import { LOAI_KQ_DU_DOAN } from '@/common/enums/common';

export interface SauBenh {
  ma_sau_benh: string;
  ten_sau_benh: string;
  loai_sau_benh: LOAI_KQ_DU_DOAN;
  hinh_anh: string[];
  trieu_chung: string;
  nguyen_nhan: string;
  phong_ngua_va_giai_phap: string;
}

export interface LichSu {
  ma_lich_su: string;
  hinh_anh: string;
  tgian_ghi: number;
  ten_sau_benh: string;
  ma_sau_benh: string;
  loai_sau_Benh: LOAI_KQ_DU_DOAN;
}
