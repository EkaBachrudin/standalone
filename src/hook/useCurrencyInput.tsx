import { useState } from 'react';

interface CurrencyInputState {
  [key: string]: string;
}

const useCurrencyInput = (initialValues: CurrencyInputState) => {
    const [values, setValues] = useState<CurrencyInputState>(initialValues);

    const handleChange = (name: string, inputValue: string) => {
    
        const cleanValue = inputValue.replace(/[^0-9]/g, '');
        
        
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,  
            currencyDisplay: 'narrowSymbol'
        });
        
        const formattedValue = cleanValue ? formatter.format(parseInt(cleanValue)) : '';

        setValues(prevValues => ({
            ...prevValues,
            [name]: formattedValue
        }));
    };

    return { values, handleChange };
};

export default useCurrencyInput;

export const cleanCurrency = (value: string): string => {
    return value.replace(/Rp|\s|\,/g, '').replace(/\./g, '').replace(/\,/g, '');
};
