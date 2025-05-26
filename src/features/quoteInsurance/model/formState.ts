export interface QuoteFormState {
  documentType: 'dni' | 'ruc';
  dniOrRuc: string;
  celular: string;
  errors: {
    dniOrRuc?: string;
    celular?: string;
  };
}
export const validateForm = (form: QuoteFormState) => {
  const errors: QuoteFormState['errors'] = {};

  const dniRegex = /^\d{8}$/;
  const rucRegex = /^\d{11}$/;
  const celularRegex = /^\d{9}$/;

  if (form.documentType === 'dni' && !dniRegex.test(form.dniOrRuc)) {
    errors.dniOrRuc = 'DNI debe tener 8 dígitos';
  } else if (form.documentType === 'ruc' && !rucRegex.test(form.dniOrRuc)) {
    errors.dniOrRuc = 'RUC debe tener 11 dígitos';
  }

  if (!celularRegex.test(form.celular)) {
    errors.celular = 'Celular debe tener 9 dígitos';
  }

  return errors;
};

