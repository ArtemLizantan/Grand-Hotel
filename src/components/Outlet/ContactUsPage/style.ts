import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const cards = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 72px 0;

  ${theme.breakpoints.down('xs')} {
    gap: 20px;
    padding: 30px 0;
  }

  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    gap: 30px;
  }
`;
