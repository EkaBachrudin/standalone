import { useMemo } from 'react';

const useCurrency = (amount: number | string): string => {
  const formattedCurrency = useMemo(() => {
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericAmount);
  }, [amount]);

  return formattedCurrency;
};

export default useCurrency;
