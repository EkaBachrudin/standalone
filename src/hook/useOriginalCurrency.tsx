import { useMemo } from 'react';

const useCurrency = (amount: number | string): string => {
  const formattedCurrency = useMemo(() => {
    if (typeof amount === 'string') {
      amount = parseFloat(amount);
    }

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }, [amount]);

  return formattedCurrency;
};

export default useCurrency;
