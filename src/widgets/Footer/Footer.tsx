import styles from './Footer.module.scss';
import logo from '@/shared/assets/logoRimac_b_n.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <img src={logo} alt="RIMAC Logo" width={73.19} height={36} />
        </div>
        <div className={styles.footerRight}>
            © 2025 RIMAC Seguros y Reaseguros.
        </div>
    </footer>
  );
};

export default Footer;
