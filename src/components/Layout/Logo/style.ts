import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const logo = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 10px;
  }
  span {
    font-weight: 700;
    font-size: 24px;
    color: ${theme.palette.primary.light};
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 556px) {
      font-size: 16px;
    }
  }
  @media (max-width: 768px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
