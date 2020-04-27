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
                href="https://medium.com/@flohagenbuch/uma-m%C3%A9trica-para-acompanhar-o-covid-19-c0046c51ba24"
                target="_blank"
                title="Uma métrica para acompanhar o COVID-19"
              >
                Metodologia
              </Button>
              <Button
                className={classes.link}
                color="inherit"
                component="a"
                href="https://medium.com/@flohagenbuch/vemos-luz-no-fim-do-t%C3%BAnel-covid-19-96663d3cf1ed"
                target="_blank"
                title="Vemos luz no fim do túnel COVID-19?"
              >
                Perspectivas
              </Button>
              {/* <Button
                className={classes.link}
                color="inherit"
                component="a"
                href="https://www.loft.com.br/about-us"
                target="_blank"
                title="Sobre a loft"
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
