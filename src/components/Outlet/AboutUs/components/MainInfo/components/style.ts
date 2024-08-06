import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const body = (theme: Theme) => css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${theme.breakpoints.down('xl')} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
`;

export const left = (theme: Theme) => css`
  position: relative;
  img {
    border-radius: 6px;
    object-fit: cover;
    max-width: 100%;
  }
  svg {
    position: absolute;
    right: -5%;
    top: 0;
    ${theme.breakpoints.down('xl')} {
      transform: rotate(90deg);
      left: 50%;
      top: 55%;
    }
    ${theme.breakpoints.down('md')} {
      display: none;
    }
  }
`;

export const right = (theme: Theme) => css`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${theme.breakpoints.down('md')} {
    width: 100%;
  }
  h2,
  h4 {
    text-align: left;
  }
`;
