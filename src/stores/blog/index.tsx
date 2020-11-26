import React, { createContext, useContext, useEffect, useState } from 'react';
import { getBlog } from './endPoints';
import { severityType } from '../../global/errorHandling/types';
import { ErrorHandlingContext } from '../../global/errorHandling/errorHandlingProvider';
import { wordPressDataType } from '../../types/apiTypes';

export type BlogProviderType = {
  blog: wordPressDataType[];
};

export const BlogContext = createContext<BlogProviderType | undefined>(
  undefined,
);

type ProviderType = {
  children: React.ReactNode;
};

export const BlogProvider = ({ children }: ProviderType) => {
  const [blog, setBlog] = useState<wordPressDataType[]>([]);
  const errorHandling = useContext(ErrorHandlingContext);

  useEffect(() => {
    getBlog().then(({ data, error }) => {
      if (error) {
        errorHandling?.addError({
          severity: severityType.ERROR,
          title: error.message,
        });
      } else if (data) {
        setBlog(data);
      }
    });
  }, [errorHandling]);

  const context: BlogProviderType = {
    blog,
  };

  return (
    <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
  );
};
