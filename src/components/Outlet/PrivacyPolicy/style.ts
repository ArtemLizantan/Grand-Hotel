import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const privacy = (theme: Theme) => css`
  max-width: 1000px;
  border-radius: 20px;
  background: ${theme.palette.background.paper};
  color: ${theme.palette.text.secondary};
  border: 3px solid ${theme.palette.text.primary};
  margin: 100px auto;
  text-align: left;
  padding: 0 20px;
  ${theme.breakpoints.down('md')} {
    margin: 20px auto;
    width: 90%;
  }
`;

export const title = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  font-size: 35px;
  margin-bottom: 20px;
  ${theme.breakpoints.down('md')} {
    font-size: 30px;
  }
`;

export const text = (theme: Theme) => css`
  color: ${theme.palette.text.primary};
  font-size: 20px;
  text-align: left;
  ${theme.breakpoints.down('md')} {
    font-size: 16px;
  }
`;
