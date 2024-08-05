import { css } from '@emotion/react';

export const bgWrap = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const content = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const body = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
