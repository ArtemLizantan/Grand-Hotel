import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const preview = (theme: Theme) => css`
  height: 800px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
  }

  ${theme.breakpoints.down('sm')} {
    height: 500px;
  }
`;
export const content = () => css`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
`;

export const top = () => css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const btnWrap = () => css`
  width: 100%;
`;
