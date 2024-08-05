import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const title = (theme: Theme) => css`
  font-weight: 700;
  font-size: 48px;
  line-height: 110%;
  text-align: center;
  margin: 0;
  ${theme.breakpoints.down('md')} {
    font-size: 40px;
  }
  ${theme.breakpoints.down('xs')} {
    font-size: 24px;
    line-height: 110%;
  }
`;
