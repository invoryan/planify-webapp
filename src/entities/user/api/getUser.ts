import axiosInstance from '@/shared/api/axiosInstance';
import type { User } from '@/entities/user/model/User';

export const getUser = async (): Promise<User> => {
  const { data } = await axiosInstance.get<User>('user.json');
  return data;
};
