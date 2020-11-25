import React, { createContext, useContext, useEffect, useState } from 'react';
import { authCredentialsType } from '../../global/auth/types';
import { getPages } from './endPoints';
import { severityType } from '../../global/errorHandling/types';
import { ErrorHandlingContext } from '../../global/errorHandling/errorHandlingProvider';

export type PagesProviderType = {
  removeToDo: (index: number) => void;
};

export const PagesContext = createContext<PagesProviderType | undefined>(
  undefined
);

type ProviderType = {
  children: React.ReactNode;
};

export const PagesProvider = ({ children }: ProviderType) => {
  const [toDoItems, setToDoItems] = useState<string[]>([]);
  const errorHandling = useContext(ErrorHandlingContext);
  useEffect(() => {
    handleGetPages();
  }, []);

  const handleGetPages = async () => {
    const { data, error } = await getPages();
    debugger;
    if (error) {
      errorHandling?.addError({
        severity: severityType.ERROR,
        title: error.message,
      });
    }
  };

  const removeToDo = (index: number) => {
    toDoItems.splice(index, 1);
    setToDoItems([...toDoItems]);
  };
  const context: PagesProviderType = {
    removeToDo,
  };

  return (
    <PagesContext.Provider value={context}>{children}</PagesContext.Provider>
  );
};
