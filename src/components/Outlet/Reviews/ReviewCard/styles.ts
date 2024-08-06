import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const slide = (theme: Theme) => css`
  margin: 50px 0px;
  padding: 15px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  background-color: ${theme.palette.background.paper};
  color: ${theme.palette.text.secondary};

  ${theme.breakpoints.down('xs')} {
    margin: 20px 0px;
    margin-bottom: 50px;
  }
`;

export const rating = (theme: Theme) => css`
  & .MuiRating-icon {
    color: ${theme.palette.primary.main};
  }
`;

export const feedback = css`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 500px;
`;

export const wrap = () => css`
  max-width: 200px;
`;
