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
      padding: 32,
    },
    title: {
      marginBottom: 24,
    },
    buttonContainer: {
      marginTop: 32,
      marginBottom: 8,
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);
