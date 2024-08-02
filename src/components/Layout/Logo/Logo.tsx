import Image from 'next/image';
import Link from 'next/link';
import * as classes from './style';

const logoPath = '/images/content/header/logo.svg';

export default function Logo() {
  return (
    <Link
      css={classes.logo}
      href='/'>
      <Image
        src={logoPath}
        width={60}
        height={60}
        alt='logo'
      />
      <span>GRAND HOTEL</span>
    </Link>
  );
}
