import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';

import { getModelResults } from 'store/actions';

import useStyles from './Home.styles';

import data from '../../data/output'

const Home = () => {
  const classes = useStyles();

  const error = false;
  const states = data.data;

  if (error) {
    return (
      <div className={classes.errorWrapper}>
        <Typography variant="h5">Ocurrió un error!</Typography>
        <Typography variant="h6">Intente nuevamente más tarde.</Typography>
      </div>
    );
  }

  return (
    <>
      <Section
        title="¿Qué es el <em>R<sub>t</sub></em>?"
        description={`El <em>R<sub>t</sub></em>, o número de reproducción efectivo, es el número promedio de infecciones causadas por cada persona infectada en un momento dado, teniendo en cuenta los cambios en nuestro comportamiento (cuarentena, uso de máscaras, oficina en el hogar, etc.). Un <em>R<sub>t</sub></em> de 3–4 infectará virtualmente a toda la población, mientras que un Rt de 1.5 aún puede llegar al 60% de la población. Solo si el Rt es menor que 1, la epidemia disminuirá de tamaño hasta que se elimine.`}
      />
      <Section
        title="Comparación entre departamentos"
        description="Para hacer una comparación entre departamentos, mostramos la última estimación de Rt para cada estado en el gráfico a continuación, con la incertidumbre asociada. Los gráficos se ordenan de mejor a peor utilizando la estimación más probable del modelo."
      >
        <div className={classes.barChartWrapper}>
          { <Line data={states} /> }
        </div>
      </Section>
      <Section
        title="<em>R<sub>t</sub></em> en tiempo real por departamento"
        description="Nuestro modelo produce una estimación de <em>R<sub>t</sub></em> para cada uno de los departamentos peruanos, con un rango creíble de 90% de probabilidad. En los gráficos a continuación, mostramos la estimación para cada departamento. En el eje vertical tenemos la estimación de <em>R<sub>t</sub></em> en el tiempo. Los puntos son las estimaciones, mientras que la sombra significa todos los valores posibles de <em>R<sub>t</sub></em> en una fecha determinada (intervalo creíble). Solo si el <em>R<sub>t</sub></em> es menor que 1, la epidemia disminuirá de tamaño hasta que se elimine."
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={4}
        >
          {<RiskList data={states} />}
        </Grid>
      </Section>
    </>
  );
};

export default Home;
