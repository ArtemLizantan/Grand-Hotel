import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const bgWrap = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const content = () => css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 20;
`;

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${theme.breakpoints.down('sm')} {
    gap: 20px;
  }
`;

export const background = () => css`
  width: 100%;
  height: 327px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
