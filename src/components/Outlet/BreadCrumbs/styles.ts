import { css } from '@emotion/react';

export const breadcrumbContainer = css`
  display: flex;
  flex-wrap: wrap;
  aling-items: center;
`;

export const breadcrumbList = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const breadcrumbItem = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.4s;
    font-size: 16px;
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

export const breadcrumbLink = css`
  text-decoration: none;
  color: #fff;
`;
