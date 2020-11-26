import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPages } from './endPoints';
import { severityType } from '../../global/errorHandling/types';
import { ErrorHandlingContext } from '../../global/errorHandling/errorHandlingProvider';
import { wordPressDataType } from '../../types/apiTypes';

export type PagesProviderType = {
  pages: wordPressDataType[];
};

export const PagesContext = createContext<PagesProviderType | undefined>(
  undefined
);

type ProviderType = {
  children: React.ReactNode;
};

export const PagesProvider = ({ children }: ProviderType) => {
  const [pages, setPages] = useState<wordPressDataType[]>([]);
  const errorHandling = useContext(ErrorHandlingContext);

  useEffect(() => {
    getPages().then(({ data, error }) => {
      if (error) {
        errorHandling?.addError({
          severity: severityType.ERROR,
          title: error.message,
        });
      } else if (data) {
        setPages(data);
      }
    });
  }, [errorHandling]);

  const context: PagesProviderType = {
    pages,
  };

  return (
    <PagesContext.Provider value={context}>{children}</PagesContext.Provider>
  );
};
