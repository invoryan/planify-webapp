import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/components/Button/button';
import styles from './QuoteForm.module.scss';
import { validateForm} from '@/features/quoteInsurance/model/formState';
import type { QuoteFormState } from '@/features/quoteInsurance/model/formState';

const initialState: QuoteFormState = {
  documentType: 'dni',
  dniOrRuc: '',
  celular: '',
  errors: {},
};

const QuoteForm = () => {
  const [form, setForm] = useState<QuoteFormState>(initialState);
  const navigate = useNavigate();

  const handleChange = (field: keyof QuoteFormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
      errors: {
        ...prev.errors,
        [field]: undefined,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (errors.dniOrRuc || errors.celular) {
      setForm((prev) => ({ ...prev, errors }));
      return;
    }
    navigate('/planes');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <select
            value={form.documentType}
            onChange={(e) =>
            setForm((prev) => ({ ...prev, documentType: e.target.value as 'dni' | 'ruc' }))
            }
        >
            <option value="dni">DNI</option>
            <option value="ruc">RUC</option>
        </select>

        <input
            type="number"
            placeholder={form.documentType === 'dni' ? 'Ingrese su DNI' : 'Ingrese su RUC'}
            value={form.dniOrRuc}
            onChange={(e) => handleChange('dniOrRuc', e.target.value)}
        />
        {form.errors.dniOrRuc && <p className={styles.error}>{form.errors.dniOrRuc}</p>}

        <input
            type="number"
            placeholder="Celular"
            value={form.celular}
            onChange={(e) => handleChange('celular', e.target.value)}
        />
        {form.errors.celular && <p className={styles.error}>{form.errors.celular}</p>}

        <Button type="submit" text="Cotiza aquí" onClick={() => {}} />
    </form>

  );
};

export default QuoteForm;
