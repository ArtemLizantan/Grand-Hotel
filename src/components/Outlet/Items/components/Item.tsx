import Image from 'next/image';
import Link from 'next/link';
import * as classes from './style';

interface IItemProps {
  img: string;
  title: string;
  href: string;
}

export default function Item({ img, title, href }: IItemProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, no-return-assign
    <Link
      href={href}
      css={classes.item}>
      <div css={classes.body}>
        <div>
          <Image
            width={359}
            height={336}
            src={img}
            alt='image hotels'
          />
        </div>
        <div css={classes.bottom}>
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
}
