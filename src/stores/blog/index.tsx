import React, { createContext, useContext, useEffect, useState } from 'react';
import { getBlog } from '../../api/blog';
import { severityType } from '../../global/errorHandling/types';
import { ErrorHandlingContext } from '../../global/errorHandling/errorHandlingProvider';
import { wordPressDataType } from '../../api/apiTypes';

export type BlogProviderType = {
  blog: wordPressDataType[];
  fetching: boolean;
};

export const BlogContext = createContext<BlogProviderType>({
  blog: [],
  fetching: true,
});

type ProviderType = {
  children: React.ReactNode;
};

export const BlogProvider = ({ children }: ProviderType) => {
  const [blog, setBlog] = useState<wordPressDataType[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const errorHandling = useContext(ErrorHandlingContext);

  useEffect(() => {
    getBlog().then(({ data, error }) => {
      if (error) {
        errorHandling?.addError({
          severity: severityType.ERROR,
          title: error.message,
        });
      } else if (data) {
        setFetching(false);
        setBlog(data);
      }
    });
  }, [errorHandling]);

  const context: BlogProviderType = {
    blog,
    fetching,
  };

  return (
    <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
  );
};
