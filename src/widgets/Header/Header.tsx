import ContactInfo from '@/shared/components/ContactInfo/ContactInfo';
import styles from './Header.module.scss';
import logo from '@/shared/assets/logoRimac.svg';

const Header = () => {
  return (
    <header className={styles.header}>
        <img src={logo} alt="RIMAC Logo" width={73.19} height={36} />
        <ContactInfo />
    </header>
  );
};

export default Header;
