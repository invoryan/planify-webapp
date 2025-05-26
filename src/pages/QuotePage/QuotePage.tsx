import QuoteForm from '@/features/quoteInsurance/ui/QuoteForm/QuoteForm';
import styles from './QuotePage.module.scss';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';

const QuotePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Seguro Salud Flexible</h1>
        <p>Creado para ti y tu familia. Tú eliges cuánto pagar.</p>
        <p>Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;