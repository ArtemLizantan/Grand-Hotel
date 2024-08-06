import { css, keyframes } from '@emotion/react';

const s3 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinnerWrap = () => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff; // Фон прелоадера
  z-index: 9999; // Обеспечивает, что прелоадер находится над всем контентом
`;

export const customLoader = () => css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #1565c0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
  animation: ${s3} 1s infinite linear;
`;
