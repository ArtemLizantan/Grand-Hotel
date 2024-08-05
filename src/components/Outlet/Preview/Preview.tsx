import Image from 'next/image';
import Container from '../Container';
import * as classes from './style';
import { previewData } from './preview.data';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Button from '../Button';

export default function Preview() {
  return (
    <section css={classes.preview}>
      <Image
        src={previewData.img}
        fill
        alt='preview'
      />
      <Container>
        <div css={classes.content}>
          <div css={classes.top}>
            <Title
              color='#fff'
              text={previewData.title}
            />
            <Subtitle
              color='#fff'
              text={previewData.subtitle}
            />
          </div>
          <div css={classes.btnWrap}>
            <Button
              text={previewData.button}
              href={previewData.buttonPath}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
