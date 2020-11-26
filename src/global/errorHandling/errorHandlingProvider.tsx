import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ErrorSnackBar } from './components/errorSnackbar';
import { errorDataType, ErrorHandlingContextType, errorType } from './types';

export const ErrorHandlingContext = createContext<
  ErrorHandlingContextType | undefined
>(undefined);

type ProviderType = {
  children: React.ReactNode;
};

export const ErrorHandlingProvider = ({ children }: ProviderType) => {
  const [errors, setErrors] = useState<errorType[]>([]);
  const addError = (error: errorDataType) => {
    setErrors([{ id: uuidv4(), ...error }]);
  };
  const deleteError = (id: string) => {
    setErrors(errors.filter((error) => error.id !== id));
  };
  const clearErrors = () => {
    setErrors([]);
  };
  const providerValue = {
    deleteError,
    addError,
    clearErrors,
  };
  return (
    <ErrorHandlingContext.Provider value={providerValue}>
      {children}
      <ErrorSnackBar errors={errors} deleteError={deleteError} />
    </ErrorHandlingContext.Provider>
  );
};
