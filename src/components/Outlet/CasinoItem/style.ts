import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const card = (theme: Theme) => css`
  max-width: 360px;
  width: 100%;
  transition: all 0.4s;
  ${theme.breakpoints.up('md')} {
    &:hover {
      transform: scale(1.05);
    }
  }
  ${theme.breakpoints.down('lg')} {
    max-width: 500px;
  }
`;

export const body = () => css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const top = (theme: Theme) => css`
  position: relative;
  width: 100%;
  width: 360px;
  height: 350px;
  ${theme.breakpoints.down('lg')} {
    width: 500px;
    height: 500px;
  }
  ${theme.breakpoints.down('xs')} {
    width: 100%;
    height: 200px;
    img {
      object-fit: cover;
    }
  }
`;

export const bottom = (theme: Theme) => css`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 6px;
  padding: 20px;
  height: 300px;
  ${theme.breakpoints.down('sm')} {
    height: auto;
  }
  a {
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.palette.text.primary};
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    color: ${theme.palette.text.primary};
  }
`;
