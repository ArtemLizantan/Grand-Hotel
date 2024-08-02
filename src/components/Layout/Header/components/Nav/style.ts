import { css } from '@emotion/react';
import { Theme } from '@mui/material';

export const nav = css`
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const list = () => css`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 100%;
    gap: 0;
  }
`;
export const listItem = (theme: Theme) => css`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: ${theme.palette.text.secondary};
  @media (max-width: 991px) {
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 55px;
      color: ${theme.palette.text.primary};
      font-size: 14px;
      border-bottom: 1px solid;
      &:not(:last-child) {
        border-bottom: 1px solid;
      }
    }
  }

  @media (max-width: 991px) {
    width: 100%;
    color: ${theme.palette.text.primary};
    display: flex;
    align-items: center;
  }
`;

export const close = css`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: #000;
  z-index: 1000;
  border: none;
  background: unset;
`;

export const dropdownWrap = css`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const secondMenu = (theme: Theme) => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.palette.primary.light};
  position: absolute;
  top: 130%;
  width: 100%;
  border-radius: 20px;
  @media (max-width: 991px) {
    position: fixed;
    background-color: ${theme.palette.text.secondary};
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: unset;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    color: ${theme.palette.text.primary};
    font-size: 14px;
    &:not(:last-child) {
      border-bottom: 1px solid;
    }
  }
`;

export const arrowBack = css`
  display: none;
  background-color: unset;
  border: none;
  @media (max-width: 991px) {
    display: block;
    position: absolute;
    left: 20px;
    top: 20px;
    width: fit-content;
  }
`;

export const buttonDrop = (theme: Theme) => css`
  cursor: pointer;
  background: unset;
  border: none;
  color: ${theme.palette.text.secondary};
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 991px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    color: ${theme.palette.text.primary};
    font-size: 14px;
    border-bottom: 1px solid;
  }
`;

export const arrowDropDownIcon = css`
  @media (max-width: 991px) {
    position: absolute;
    right: 50px;
    transform: rotate(-90deg);
    width: 30px;
    height: 30px
  }
`;
