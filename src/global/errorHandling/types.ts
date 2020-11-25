export enum severityType {
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  SUCCESS = 'success',
}
export type errorDataType = {
  severity: severityType;
  title: string;
};
export type errorType = errorDataType & {
  id: string;
};
export type ErrorHandlingContextType = {
  addError: (error: errorDataType) => void;
  deleteError: (id: string) => void;
  clearErrors: () => void;
};
