import styles from './Button.module.scss';

interface Props {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit';
}

const Button = ({ text, onClick, type = 'button' }: Props) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
