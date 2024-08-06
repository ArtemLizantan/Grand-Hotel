import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const modal = (theme: Theme) => css`
  background: ${theme.palette.background.default};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 100%;
  min-height: 644px;
  border-radius: 20px;
  border: unset;
  z-index: 50000000;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: auto;
  ${theme.breakpoints.down('md')} {
    width: 90%;
    padding: 20px 15px;
  }
  ${theme.breakpoints.down("xs")} {
    gap: 20px;
  }
`;

export const form = () => css`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const fields = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;

  ${theme.breakpoints.down('xs')} {
    gap: 20px;
  }
`;

export const fieldsWrap = () => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const field = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  position: relative;
  p {
    position: absolute;
    bottom: -50%;
    font-size: 14px;
    font-weight: 700;
    left: -10px;
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
    ${theme.breakpoints.down('xs')} {
      bottom: -35%;
      font-size: 9px;
    }
  }
`;

export const checkboxWrap = (theme: Theme) => css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  label {
    a {
      text-decoration: underline;
    }
    cursor: pointer;
    ${theme.breakpoints.down('sm')} {
      font-size: 10px !important;
    }
  }
  p {
    position: absolute;
    bottom: -10%;
    right: 35%;
    font-size: 14px;
    font-weight: 700;
    color: #d32f2f;
    ${theme.breakpoints.down('sm')} {
      font-size: 12px;
    }
    ${theme.breakpoints.down('xs')} {
      bottom: -40%;
      font-size: 9px;
      right: 40%;
    }
  }
`;

export const PhoneInput = (theme: Theme) => css`
  display: flex;
  align-items: center;
  position: relative;

  input {
    font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 4px 0 5px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    display: block;
    min-width: 0;
    width: 100%;
    -webkit-animation-name: mui-auto-fill-cancel;
    animation-name: mui-auto-fill-cancel;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding: 16.5px 14px;
    background: transparent;
    padding-left: 50px;
    ${theme.breakpoints.down('sm')} {
      font-size: 14px;
    }
  }
  .PhoneInputCountry {
    position: absolute;
    top: 50%;
    transform: translate(20%, -50%);
  }
`;
export const telError = (theme: Theme) => css`
  position: absolute;
  bottom: -45% !important;
  font-size: 14px;
  font-weight: 700;
  left: 1% !important;
  color: #d32f2f;
  ${theme.breakpoints.down('sm')} {
    font-size: 12px;
  }
  ${theme.breakpoints.down('xs')} {
    bottom: -35% !important;
  }
`;
