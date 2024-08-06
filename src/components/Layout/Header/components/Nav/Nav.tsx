/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { css, Theme } from '@emotion/react';
import * as classes from './style';
import { headerData } from '../../header.data';

interface NavProps {
  openMobile: boolean;
  setOpenMenu: (open: boolean) => void;
  onMouseEnter: (menuType: 'pages' | 'destinations') => void;
  openDestinationsMenu: boolean;
  openPagesMenu: boolean;
  setOpenPagesMenu: (open: boolean) => void;
  setOpenDestinationsMenu: (open: boolean) => void;
}

export default function Nav({
  openMobile,
  setOpenMenu,
  onMouseEnter,
  openDestinationsMenu,
  openPagesMenu,
  setOpenPagesMenu,
  setOpenDestinationsMenu,
}: NavProps) {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleClose = () => {
    setOpenMenu(false);
    setOpenPagesMenu(false);
    setOpenDestinationsMenu(false);
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
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
          css={classes.close}
          type='button'
          onClick={handleClose}>
          <CloseIcon />
        </button>
      )}
      <ul css={classes.list}>
        {headerData.nav.map(({ id, name, path, items }) => {
          if (name === 'DESTINATIONS' || name === 'PAGES') {
            const isOpen = name === 'DESTINATIONS' ? openDestinationsMenu : openPagesMenu;

            return (
              <li
                css={classes.listItem}
                style={{ position: 'relative' }}
                key={id}
                onMouseEnter={() => onMouseEnter(name === 'PAGES' ? 'pages' : 'destinations')}>
                <div css={classes.dropdownWrap}>
                  <button
                    css={classes.buttonDrop}
                    type='button'>
                    {name}
                  </button>
                  <ArrowDropDownIcon css={classes.arrowDropDownIcon} />
                </div>
                {isOpen && (
                  <div css={classes.secondMenu}>
                    <button
                      type='button'
                      onClick={() => {
                        setOpenPagesMenu(false);
                        setOpenDestinationsMenu(false);
                        setOpenPagesMenu(false)
                      }}
                      css={classes.arrowBack}>
                      <KeyboardBackspaceIcon />
                    </button>
                    {items &&
                      items.map(({ idItem, pathItem, nameItem }) => (
                        <Link
                          key={idItem}
                          href={pathItem}
                          onClick={() => {
                            setOpenMenu(false);
                            setOpenDestinationsMenu(false);
                            setOpenPagesMenu(false);
                          }}>
                          {nameItem}
                        </Link>
                      ))}
                  </div>
                )}
              </li>
            );
          }

          return (
            <li
              css={classes.listItem}
              key={id}>
              <Link
              css={classes.link}
                onClick={() => setOpenMenu(false)}
                href={path || '#'}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
