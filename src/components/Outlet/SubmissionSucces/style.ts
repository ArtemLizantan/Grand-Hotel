import { Theme } from '@mui/material';
import { css } from '@emotion/react';

export const icon = (theme: Theme) => css`
  color: green;
  margin: 0 auto;

  svg {
    fill: ${theme.palette.primary.main};
  }
`;

export const wrap = (theme: Theme) => css`
  position: relative;
  padding: 70px 20px 70px 20px;
  color: ${theme.palette.text.secondary};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${theme.palette.text.primary};
`;

export const textWrap = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  aling-items: center;
  padding: 40px 20px;
  background: rgba(250, 250, 250, 0.3);
  border: 2px solid #fff;
  border-radius: 30px;
`;
