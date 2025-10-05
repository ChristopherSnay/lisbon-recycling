import { createContext, useContext, useState, type ReactNode } from 'react';

interface SavedStreetContextType {
  savedStreetId: number | null;
  setSavedStreetId: (streetId: number | null) => void;
}

const SavedStreetContext = createContext<SavedStreetContextType | undefined>(undefined);

export const useSavedStreet = () => {
  const context = useContext(SavedStreetContext);
  if (!context) {
    throw new Error('useStreet must be used within a StreetProvider');
  }
  return context;
};

export const SavedStreetProvider = ({ children }: { children: ReactNode }) => {
  const [savedStreetId, setStreetId] = useState<number | null>(() => {
    const stored = localStorage.getItem('street');
    return stored !== null ? Number(stored) : null;
  });

  const setSavedStreetId = (streetId: number | null): void => {
    if (streetId === null) {
      localStorage.removeItem('street');
    } else {
      setStreetId(streetId);
      localStorage.setItem('street', streetId.toString());
    }
  };

  return (
    <SavedStreetContext.Provider value={{ savedStreetId, setSavedStreetId }}>
      {children}
    </SavedStreetContext.Provider>
  );
};
