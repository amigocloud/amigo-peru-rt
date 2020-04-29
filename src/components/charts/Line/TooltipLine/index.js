import React from 'react';

import { Typography } from '@material-ui/core';
import { DEPARTAMENTOS } from 'utils';
import Tooltip from 'components/charts/Tooltip';

const TooltipLine = ({ data }) => (
  <Tooltip data={data}>
    <Typography variant="caption">
      <strong>{DEPARTAMENTOS[data?.state]}</strong>
    </Typography>
  </Tooltip>
);

export default TooltipLine;
