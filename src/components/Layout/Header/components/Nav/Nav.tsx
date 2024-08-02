/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { css, Theme } from '@emotion/react'; // изменено
import * as classes from './style';
import { headerData } from '../../header.data';

interface NavProps {
  openMobile: boolean;
  setOpenMenu: (open: boolean) => void; // изменено
}

export default function Nav({ openMobile, setOpenMenu }: NavProps) {
  const [openSecondMenu, setOpenSecondMenu] = useState(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpenMenu(false); // изменено
  };

  const dynamicStyle = () => css`
    ${openMobile &&
    css`
      top: 0;
      transition: all 0.4s ease-in-out;
      position: fixed;
      background-color: #fff;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 50;
    `}
    ${!openMobile &&
    isMobile &&
    css`
      position: fixed;
      top: -100%;
      background-color: #fff;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      transition: all 0.4s ease-in-out;
    `}
  `;

  return (
    <nav css={[classes.nav, dynamicStyle()]}>
      {openMobile && (
        <button
          css={classes.close}
          type='button'
          onClick={handleClose}>
          <CloseIcon />
        </button>
      )}
      <ul css={classes.list}>
        {headerData.nav.map(({ id, name, path, items }) => (
          <li
            css={classes.listItem}
            style={{ position: 'relative' }}
            key={id}>
            {name === 'DESTINATIONS' ? (
              <>
                <div css={classes.dropdownWrap}>
                  <button
                    css={classes.buttonDrop}
                    onClick={() => name === 'DESTINATIONS' && setOpenSecondMenu((prev) => !prev)}
                    type='button'>
                    {name}
                  </button>
                  <ArrowDropDownIcon css={classes.arrowDropDownIcon} />
                </div>
                {openSecondMenu && (
                  <div css={classes.secondMenu}>
                    <button
                      onClick={() => setOpenSecondMenu(false)}
                      css={classes.arrowBack}>
                      <KeyboardBackspaceIcon />
                    </button>
                    {items !== undefined &&
                      items.map(({ idItem, pathItem, nameItem }) => (
                        <Link
                          key={idItem}
                          href={pathItem}>
                          {nameItem}
                        </Link>
                      ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={path}>{name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
