'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Currency = '£' | '$';

interface CurrencyContextType {
  currency: Currency;
  isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: '$',
  isLoading: true
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('$');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect currency based on timezone (no permission required)
    const detectCurrency = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // European timezones
        const europeanTimezones = [
          'Europe/', 'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Madeira'
        ];
        
        const isEuropean = europeanTimezones.some(tz => timezone.startsWith(tz));
        
        setCurrency(isEuropean ? '£' : '$');
      } catch (error) {
        // Fallback to default
        setCurrency('$');
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
