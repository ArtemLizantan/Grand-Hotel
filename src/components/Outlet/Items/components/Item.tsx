import Image from 'next/image';
import * as classes from './style';

interface IItemProps {
  img: string;
  title: string;
}

export default function Item({ img, title }: IItemProps) {
  return (
    <div css={classes.item}>
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
    </div>
  );
}
