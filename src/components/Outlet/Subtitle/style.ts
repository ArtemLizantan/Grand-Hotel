import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const subtitle = (theme: Theme) => css`
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  text-align: center;
  margin: 0;

  ${theme.breakpoints.down('md')} {
    font-size: 20px;
  }
  ${theme.breakpoints.down('xs')} {
    font-size: 16px;
  }
`;
