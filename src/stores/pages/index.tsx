import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPages, pageDataType } from './endPoints';
import { severityType } from '../../global/errorHandling/types';
import { ErrorHandlingContext } from '../../global/errorHandling/errorHandlingProvider';

export type PagesProviderType = {
  pages: pageDataType[];
};

export const PagesContext = createContext<PagesProviderType | undefined>(
  undefined
);

type ProviderType = {
  children: React.ReactNode;
};

export const PagesProvider = ({ children }: ProviderType) => {
  const [pages, setPages] = useState<pageDataType[]>([]);
  const errorHandling = useContext(ErrorHandlingContext);

  const handleGetPages = async () => {
    const { data, error } = await getPages();
    debugger;
    if (error) {
      errorHandling?.addError({
        severity: severityType.ERROR,
        title: error.message,
      });
    } else if (data) {
      setPages(data);
    }
  };

  useEffect(() => {
    handleGetPages();
  }, []);

  const context: PagesProviderType = {
    pages,
  };

  return (
    <PagesContext.Provider value={context}>{children}</PagesContext.Provider>
  );
};
