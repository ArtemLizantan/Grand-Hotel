import Image from 'next/image';
import Title from '@/components/Outlet/Title/Title';
import Subtitle from '@/components/Outlet/Subtitle/Subtitle';
import * as classes from './style';

interface IItemProps {
  img: string;
  title: string;
  subtitle: string;
}

export default function Item({ img, title, subtitle }: IItemProps) {
  return (
    <div>
      <div css={classes.body}>
        <div css={classes.left}>
          <Image
            width={703}
            height={336}
            src={img}
            alt='image hotels'
          />
          <svg
            width='7'
            height='342'
            viewBox='0 0 7 342'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M3.5 0.333333C2.02724 0.333333 0.833333 1.52724 0.833333 3C0.833333 4.47276 2.02724 5.66667 3.5 5.66667C4.97276 5.66667 6.16667 4.47276 6.16667 3C6.16667 1.52724 4.97276 0.333333 3.5 0.333333ZM3.50001 336.333C2.02726 336.333 0.833348 337.527 0.833348 339C0.833348 340.473 2.02726 341.667 3.50001 341.667C4.97277 341.667 6.16668 340.473 6.16668 339C6.16668 337.527 4.97277 336.333 3.50001 336.333ZM3 3L3.00001 339L4.00001 339L4 3L3 3Z'
              fill='white'
            />
          </svg>
        </div>
        <div css={classes.right}>
          <Title
            text={title}
            color='#fff'
            fontSize='20px'
          />
          <Subtitle
            fontSize='16px'
            text={subtitle}
            color='#fff'
          />
        </div>
      </div>
    </div>
  );
}
