import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { errorType } from '../../types';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
    display: 'flex',
    alignItems: 'center',
  },
}));

type ErrorSnackBarPropsType = {
  errors: errorType[];
  deleteError: (id: string) => void;
};
export const ErrorSnackBar = ({
  errors,
  deleteError,
}: ErrorSnackBarPropsType) => {
  const classes = useStyles();

  if (errors.length === 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Snackbar open={true} autoHideDuration={6000}>
        <>
          {errors.map(({ id, title, severity }) => {
            return (
              <Alert
                key={`error_${id}`}
                severity={severity}
                className={classes.alert}
              >
                {title}
                <IconButton aria-label="close" onClick={() => deleteError(id)}>
                  <CloseIcon style={{ color: 'white' }} />
                </IconButton>
              </Alert>
            );
          })}
        </>
      </Snackbar>
    </div>
  );
};
