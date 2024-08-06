import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const info = (theme: Theme) => css`
  padding: 50px 0;

  ${theme.breakpoints.down('xs')} {
    padding: 30px 0;
  }
`;

export const body = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoints.down('lg')} {
    flex-direction: column;
    width: 100%;
    gap: 50px;
  }
`;

export const left = () => css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h3 {
    font-size: 24px;
  }
  p {
    max-width: 460px;
  }
  h3,
  p {
    text-align: left;
    margin: 0;
  }
`;

export const right = () => css`
  height: 336px;
  position: relative;
  display: flex;
  img {
    object-fit: cover;
    border-radius: 6px;
    max-width: 100%;
  }
`;
