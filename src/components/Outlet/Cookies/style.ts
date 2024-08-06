import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const cookies = (theme: Theme) => css`
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
