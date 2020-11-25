import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      zIndex: 1,
    },
    paper: {
      width: 300,
      padding: 16,
    },
    buttonContainer: {
      marginTop: 16,
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);
