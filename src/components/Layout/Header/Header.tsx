import { Theme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@/components/Outlet/Container';
import * as classes from './style';
import Nav from './components/Nav/Nav';
import Logo from '../Logo/Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openPagesMenu, setOpenPagesMenu] = useState<boolean>(false);
  const [openDestinationsMenu, setOpenDestinationsMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleMouseEnter = (menuType: 'pages' | 'destinations') => {
    if (menuType === 'pages') {
      setOpenPagesMenu(true);
      setOpenDestinationsMenu(false);
      if (isMobile) {
        setIsMobileMenuOpen(true);
      }
    } else if (menuType === 'destinations') {
      setOpenDestinationsMenu(true);
      setOpenPagesMenu(false);
      if (isMobile) {
        setIsMobileMenuOpen(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenPagesMenu(false);
      setOpenDestinationsMenu(false);
    }
  };

  const openBurger = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <header
      onMouseLeave={handleMouseLeave}
      css={classes.header}>
      <Container>
        <div css={classes.body}>
          <Logo />
          <Nav
            setOpenDestinationsMenu={setOpenDestinationsMenu}
            setOpenPagesMenu={setOpenPagesMenu}
            openMobile={isMobileMenuOpen}
            setOpenMenu={setIsMobileMenuOpen}
            onMouseEnter={handleMouseEnter}
            openDestinationsMenu={openDestinationsMenu}
            openPagesMenu={openPagesMenu}
          />
          {isMobile && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              type='button'
              css={classes.burger}
              onClick={openBurger}>
              <MenuIcon
                fontSize='large'
                sx={{ color: (theme: Theme) => theme.palette.text.primary }}
              />
            </button>
          )}
        </div>
      </Container>
    </header>
  );
}
