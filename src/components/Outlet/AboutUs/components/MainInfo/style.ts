import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const mainInfo = (theme: Theme) => css`
  padding: 70px 0;
  margin-bottom: 50px;
  background: ${theme.palette.background.paper};
  ${theme.breakpoints.down('xs')} {
    gap: 20px;
    padding: 30px 0;
    margin-bottom: 30px;
  }
`;

export const items = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 72px;
  ${theme.breakpoints.down('xl')} {
    gap: 30px;
  }
`;

export const bottom = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;

  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    text-align: left;
  }
  a {
    width: 30%;
  }
`;
