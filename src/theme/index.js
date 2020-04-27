import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3899EC',
    },
    secondary: {
      main: '#3AB7BA',
    },
    error: {
      main: '#E35656',
    },
    background: {
      default: '#F3F7FA',
    },
    text: {
      primary: '#191F23',
    },
  },
});

export default theme;
