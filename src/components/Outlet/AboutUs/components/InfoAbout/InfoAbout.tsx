import Container from '@/components/Outlet/Container';
import Image from 'next/image';
import * as classes from './style';

interface IInfoAboutProps {
  img: string;
  title: string;
  subtitle: string;
}

export default function InfoAbout({ img, title, subtitle }: IInfoAboutProps) {
  return (
    <section css={classes.info}>
      <Container>
        <div css={classes.body}>
          <div css={classes.left}>
            <h3>{title}</h3>
            <p color='#000'> {subtitle}</p>
          </div>
          <div css={classes.right}>
            <Image
              alt='about image'
              src={img}
              width={703}
              height={536}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
