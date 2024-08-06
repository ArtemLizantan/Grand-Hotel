import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const header = (theme: Theme) => css`
  min-height: 120px;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.background.paper};
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  @media (max-width: 768px) {
    min-height: 70px;
  }
`;

export const body = css`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const burger = (theme: Theme) => css`
  background: unset;
  border: none;
  svg {
    color: ${theme.palette.text.secondary};
  }
`;
