import { Button, Container } from '@mui/material';
import Image from 'next/image';
import * as classes from './style';

export default function Custom404Component() {
  return (
    <div css={classes.body}>
      <Container>
        <div css={classes.text}>
          <Image
            alt='404 image'
            src='/images/backgrounds/404.png'
            width={400}
            objectFit='contain'
            height={200}
          />
          <p>Page not found.</p>
        </div>

        <Button href='/'>Go home</Button>
      </Container>
    </div>
  );
}
