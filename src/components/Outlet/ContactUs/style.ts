import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const contact = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;

  ${theme.breakpoints.down('xs')} {
    gap: 20px;
    padding: 30px 0;
  }
`;

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
  ${theme.breakpoints.down('sm')} {
    gap: 30px;
  }
`;

export const center = (theme: Theme) => css`
  width: 100%;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ${theme.breakpoints.down('sm')} {
      gap: 20px;
    }

    label {
      font-weight: 400;
      font-size: 16px;
      color: ${theme.palette.secondary.main};
      cursor: pointer;
      ${theme.breakpoints.down('sm')} {
        font-size: 12px;
      }
    }
    p {
      position: absolute;
      bottom: -50%;
      font-size: 14px;
      font-weight: 700;
      left: -10px;
      ${theme.breakpoints.down('sm')} {
        font-size: 12px;
      }
    }
    input {
      background: ${theme.palette.secondary.light};
      color: ${theme.palette.secondary.main};
      color: ${theme.palette.text.primary};
      border: 1px solid ${theme.palette.text.primary};
      border-radius: 6px;
    }
    textarea {
      border: 1px solid ${theme.palette.text.primary};
      border-radius: 6px;
      background: ${theme.palette.secondary.light};
      height: 180px !important;
      resize: none;
      padding: 20px;
    }
  }
`;

export const fieldsWrap = (theme: Theme) => css`
  display: flex;
  align-items: center;
  gap: 24px;
  ${theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
  .MuiFormControl-root {
    width: 100%;
  }
`;

export const fields = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${theme.breakpoints.down('sm')} {
    gap: 20px;
  }
`;

export const field = () => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
`;

export const checkboxWrap = (theme: Theme) => css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  label {
    ${theme.breakpoints.down('sm')} {
      font-size: 10px !important;
    }
  }
`;

export const message = (theme: Theme) => css`
  background: ${theme.palette.background.default};
`;

export const bottom = (theme: Theme) => css`
  display: flex;
  align-items: center;
  width: 100%;
  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 0;
    padding: 20px 0;
  }
`;

export const contacts = (theme: Theme) => css`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 110px;
  border-left: 1px solid;

  ${theme.breakpoints.down('md')} {
    border-left: unset;
    border-bottom: 1px solid;
    height: 150px;

    &:first-of-type {
      border-top: 1px solid;
    }
  }

  &:last-child {
    border-right: 1px solid;
    ${theme.breakpoints.down('md')} {
      border-right: unset;
    }
  }

  ${theme.breakpoints.down('sm')} {
    width: 100%;
  }
  svg {
    fill: ${theme.palette.primary.main};
    width: 34px;
    height: 34px;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    max-width: 300px;
    margin: 0 auto;
  }
`;
