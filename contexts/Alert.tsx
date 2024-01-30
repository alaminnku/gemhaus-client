'use client';

import AlertComponent from '@components/layout/Alert';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Alert } from 'types';

type AlertContext = {
  setAlerts: Dispatch<SetStateAction<Alert[]>>;
};

const AlertContext = createContext({} as AlertContext);
export const useAlert = () => useContext(AlertContext);

export default function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Remove the alert after 3 seconds
  useEffect(() => {
    if (alerts.length > 0) {
      const removeAlert = setTimeout(() => {
        setAlerts((prevState) =>
          prevState.filter((alert, index) => index !== 0)
        );
      }, 3000);

      return () => clearTimeout(removeAlert);
    }
  }, [alerts]);

  return (
    <AlertContext.Provider value={{ setAlerts }}>
      {children}
      <AlertComponent alerts={alerts} />
    </AlertContext.Provider>
  );
}
