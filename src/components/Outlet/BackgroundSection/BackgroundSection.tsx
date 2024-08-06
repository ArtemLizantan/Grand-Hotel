import Image from 'next/image';
import * as classes from './styles';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Container from '../Container';
import BreadCrumbs from '../BreadCrumbs';

interface Props {
  path: string;

  priority?: boolean;
  title: string;
  subtitle?: string;
}

// TODO: Use it for sections/pages with background instead using background property in CSS
export default function BackgroundSection({ priority, path, title, subtitle }: Props) {
  return (
    <section css={classes.background}>
      <div css={classes.bgWrap}>
        <Image
          priority={priority}
          alt='background'
          src={path}
          placeholder='blur'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <Container>
        <div css={classes.body}>
          <div css={classes.content}>
            {subtitle && (
              <Subtitle
                color='#fff'
                text={subtitle}
              />
            )}

            <Title
              color='#fff'
              text={title}
            />
          </div>

          <BreadCrumbs />
        </div>
      </Container>
    </section>
  );
}

BackgroundSection.defaultProps = {
  priority: false,
  subtitle: null,
};
