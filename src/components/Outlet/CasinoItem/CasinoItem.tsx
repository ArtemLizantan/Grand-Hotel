import Link from 'next/link';
import Image from 'next/image';
import * as classes from './style';

interface ICasinoItem {
  img: string;
  path: string;
  title: string;
  subtitle: string;
}

export default function CasinoItem({ img, path, title, subtitle }: ICasinoItem) {
  return (
    <div css={classes.card}>
      <div css={classes.body}>
        <div css={classes.top}>
          <Image
            src={img}
            fill
            alt='card image'
          />
        </div>
        <div css={classes.bottom}>
          <Link
            target='_blank'
            href={path}>
            {title}
          </Link>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
