import type { FC } from 'react';
import type { User } from '@/entities/user/model/User';
import styles from './UserInfoCard.module.scss';

interface UserInfoCardProps {
  user: User;
}

export const UserInfoCard: FC<UserInfoCardProps> = ({ user }) => {
  return (
    <div className={styles.card}>
      <h2>{user.name} {user.lastName}</h2>
      <p><strong>Fecha de nacimiento:</strong> {user.birthDay}</p>
    </div>
  );
};
