import { ReactNode, useEffect, useState } from 'react';
import CookieConsent from '@/components/CookiesConsent';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import * as classes from './styles';
import FirstModal from './Popup/Popup';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div css={classes.wrap}>
      <Header />
      {popup && (
        <FirstModal
          open={popup}
          setOpen={setPopup}
        />
      )}
      <main css={classes.main}>{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
