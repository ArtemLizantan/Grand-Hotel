import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const footer = (theme: Theme) => css`
  background: ${theme.palette.background.paper};
  color: ${theme.palette.text.secondary};
  padding: 60px 0;
  a {
    transition: all 0.4s ease-in-out;
    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
  ${theme.breakpoints.down('md')} {
    .MuiGrid-root {
      width: 100%;
    }
  }
`;

export const column = (theme: Theme) => css`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${theme.breakpoints.down('md')} {
    max-width: unset;
    justify-content: flex-start;
    width: 100%;
    gap: 30px;
  }
  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
  }
  h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
  }
`;

export const body = (theme: Theme) => css`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100%;
  }
`;

export const inputWrap = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    position: absolute;
    bottom: -50%;
    font-size: 14px;
    font-weight: 700;
    left: -10px;
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
  }
  input {
    width: 100%;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.6);
  }
  button {
    font-size: 16px;
    width: 20%;
    padding: 15px 0;
  }
`;

export const copy = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a:not(:first-child) {
    text-decoration: underline;
    text-underline-offset: 5px;
    transition: all 0.4s ease-in-out;

    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;
