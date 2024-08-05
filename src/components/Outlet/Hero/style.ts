import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const hero = css`
  position: relative;
  height: 800px;
  unicode-bidi: unset;
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
  }
`;

export const content = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const title = (theme: Theme) => css`
  font-weight: 700;
  font-size: 48px;
  color: ${theme.palette.text.secondary};
  max-width: 500px;
  @media (max-width: 991px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;
