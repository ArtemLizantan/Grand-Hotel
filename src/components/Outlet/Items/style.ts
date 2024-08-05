import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;

  ${theme.breakpoints.down('xs')} {
    gap: 20px;
    padding: 30px 0;
  }
`;

export const bottom = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const top = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
