    import QuoteForm from '@/features/quoteInsurance/ui/QuoteForm/QuoteForm';
    import styles from './QuotePage.module.scss';
    import Header from '@/widgets/Header/Header';
    import Footer from '@/widgets/Footer/Footer';

    const QuotePage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.bgImageLeft}></div>
            <div className={styles.bgImageRight}></div>
            <div className={styles.hero}>
                <Header />
                <main className={styles.main}>
                    <div className={styles.bgLogin}></div>
                    <div className={styles.card}>
                        <div className={styles.tag}>Seguro Salud Flexible</div>
                        <div className={styles.info}>
                            <h1>Creado para ti y tu familia</h1>
                            <h2>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</h2>
                        </div>
                        <QuoteForm />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
    };

    export default QuotePage;