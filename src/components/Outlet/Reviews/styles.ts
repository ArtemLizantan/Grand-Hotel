import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const title = (theme: Theme) => css`
  text-align: center;
  color: ${theme.palette.text.secondary};
`;

export const swiper = (theme: Theme) => css`
  .swiper-button-next,
  .swiper-button-prev {
    padding: 22px;
    border: 2px solid ${theme.palette.text.primary};
    border-radius: 100%;
    background-color: ${theme.palette.background.default};

    &::after {
      color: ${theme.palette.text.primary};
      font-size: 15px;
      font-weight: 700;
    }
  }

  .swiper-button-next {
    top: 90%;
  }

  .swiper-button-prev {
    top: 90%;
    left: auto;
    right: 70px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    background-color: ${theme.palette.text.primary};
    opacity: 1;
  }

  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: ${theme.palette.primary.main};
  }
`;
