import { dateObjectBuider } from 'utils';

export const DEPARTAMENTOS = {
  AM: 'Amazonas',
  AN: 'Ancash',
  AP: 'Apurímac',
  AR: 'Arequipa',
  AY: 'Ayacucho',
  CA: 'Callao',
  CJ: 'Cajamarca',
  CU: 'Cusco',
  HU: 'Huánuco',
  HV: 'Huancavelica',
  IC: 'Ica',
  JU: 'Junín',
  LA: 'Lambayeque',
  LL: 'La Libertad',
  LI: 'Lima',
  LO: 'Loreto',
  MD: 'Madre de Dios',
  MO: 'Moquegua',
  PA: 'Pasco',
  PI: 'Piura',
  PU: 'Puno',
  SM: 'San Martín',
  TA: 'Tacna',
  TU: 'Tumbes',
  UC: 'Ucayali'
};

export const getLastTimestamp = (data) => data?.[data?.length - 1][1];

export const getLastRtValue = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.y.toFixed(2);

export const formatListData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, y, low, high, newCases, smoothedCases] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        y,
        low,
        high,
        newCases,
        smoothedCases,
      }),
    };
  }, {});
};

export const formatNewCasesData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, rt, low, high, newCases, smoothedCases] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        rt,
        low,
        high,
        y: newCases,
        smoothedCases,
      }),
    };
  }, {});
};

export const formatSmoothedCasesData = (data) => {
  return data?.reduce((current, next) => {
    const [id, x, rt, low, high, newCases, smoothedCases] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        rt,
        low,
        high,
        newCases,
        y: smoothedCases,
      }),
    };
  }, {});
};

export const formatNewDeathsData = (data) => {
  return data?.reduce((current, next) => {
    const [
      id,
      x,
      rt,
      low,
      high,
      newCases,
      smoothedCases,
      newDeaths,
      smoothedDeaths,
    ] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        rt,
        low,
        high,
        newCases,
        smoothedCases,
        y: newDeaths,
        smoothedDeaths,
      }),
    };
  }, {});
};

export const formatSmoothedDeathsData = (data) => {
  return data?.reduce((current, next) => {
    const [
      id,
      x,
      rt,
      low,
      high,
      newCases,
      smoothedCases,
      newDeaths,
      smoothedDeaths,
    ] = next;
    const date = dateObjectBuider(x);

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        date,
        x: date,
        rt,
        low,
        high,
        newCases,
        smoothedCases,
        newDeaths,
        y: smoothedDeaths,
      }),
    };
  }, {});
};

export const formatBarChartData = (data) => {
  const formattedData = formatListData(data) || {};
  return Object.keys(formattedData)?.map(
    (k) => formattedData[k][formattedData[k].length - 1]
  );
};
