import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Typography from 'components/Typography';
import useStyles from './Layout.styles';

import { fullFormatDate, getLastTimestamp, dateObjectBuider } from 'utils';

import data from '../../data/output'

const Layout = ({ children }) => {
  const classes = useStyles();
  const formattedDate = fullFormatDate(dateObjectBuider(getLastTimestamp(data.data)));

  return (
    <>
      <AppBar />
      <Container className={classes.container} maxWidth="lg" component="main">
        <Typography variant="h2" component="h2">
          <em>
            R<sub>t</sub>
          </em>{' '}
          de COVID-19 por departamento en Perú
        </Typography>
        <Typography variant="h6" color="primary">
          Actualizado diariamente.
        </Typography>
        <Typography variant="h6">
          Datos hasta: <strong>{formattedDate}</strong>
        </Typography>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
