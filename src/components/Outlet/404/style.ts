import { css, Theme } from '@mui/material';

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50vh;
  color: ${theme.palette.text.primary};
  margin-top: 50px;
  margin-bottom: 150px;
  @media (max-width: 556px) {
    img {
      max-width: 100%;
    }
  }
`;

export const text = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0;
    text-align: center;
    font-size: 50px;
    text-decoration: underline;
    text-underline-offset: 20px;
  }
  p {
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    margin-top: -50px;
    margin-bottom: 40px;
  }
`;
