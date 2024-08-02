import { Theme } from '@emotion/react'; // изменено
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@/components/Outlet/Container';
import * as classes from './style';
import Nav from './components/Nav/Nav';
import Logo from '../Logo/Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const openBurger = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <header css={classes.header}>
      <Container>
        <div css={classes.body}>
          <Logo />
          <Nav
            setOpenMenu={setIsMobileMenuOpen}
            openMobile={isMobileMenuOpen}
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
