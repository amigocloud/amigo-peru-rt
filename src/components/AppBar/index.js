import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './AppBar.styles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar
        className={classes.header}
        color="transparent"
        position="static"
        component="header"
      >
        <Container maxWidth="xl">
          <Toolbar>
            <img className={classes.title} src="https://cdnamigocloud.global.ssl.fastly.net/dashboard/img/AmigoCloud-01.svg" />
            <nav className={classes.navigation}>
              <Button
                className={classes.link}
                color="inherit"
                component="a"
                href="https://medium.com/@rburhum"
                target="_blank"
                title="Una métrica para COVID-19"
              >
                Metodologia
              </Button>
              <Button
                className={classes.link}
                color="inherit"
                component="a"
                href="https://medium.com/@rburhum"
                target="_blank"
                title="que pasa despues del martillo?"
              >
                Perspectivas
              </Button>
              {/* <Button
                className={classes.link}
                color="inherit"
                component="a"
                href="https://www.amigocloud.com"
                target="_blank"
                title="Sobre a AmigoCloud"
              >
                Sobre
              </Button> */}
            </nav>
          </Toolbar>
        </Container>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
