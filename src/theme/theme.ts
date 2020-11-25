import { createMuiTheme } from '@material-ui/core/styles';

import { blue, pink } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: pink[500],
    },
  },
});
