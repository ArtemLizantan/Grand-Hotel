import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const item = (theme: Theme) => css`
  border-radius: 6px;
  transition: all 0.4s;
  cursor: pointer;
  ${theme.breakpoints.up('md')} {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const body = () => css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const bottom = (theme: Theme) => css`
  padding: 25px 0px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 6px;

  h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: ${theme.palette.text.primary};
    margin: 0 auto;
    max-width: 280px;
    ${theme.breakpoints.down('md')} {
      font-size: 20px;
    }
  }
`;
