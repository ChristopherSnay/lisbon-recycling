import { createContext, useContext, useState, type ReactNode } from 'react';

interface StreetContextType {
  streetId: number | null;
  setStreet: (streetId: number | null) => void;
}

const StreetContext = createContext<StreetContextType | undefined>(undefined);

export const useStreet = () => {
  const context = useContext(StreetContext);
  if (!context) {
    throw new Error('useStreet must be used within a StreetProvider');
  }
  return context;
};

export const StreetProvider = ({ children }: { children: ReactNode }) => {
  const [selectedStreetId, setSelectedStreetId] = useState<number | null>(() => {
    const stored = localStorage.getItem('street');
    return stored !== null ? Number(stored) : null;
  });

  const setStreet = (streetId: number | null): void => {
    if (streetId === null) {
      localStorage.removeItem('street');
    } else {
      setSelectedStreetId(streetId);
      localStorage.setItem('street', streetId.toString());
    }
  };

  return (
    <StreetContext.Provider value={{ streetId: selectedStreetId, setStreet }}>
      {children}
    </StreetContext.Provider>
  );
};
