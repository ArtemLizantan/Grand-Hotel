import Container from '@/components/Outlet/Container';
import Title from '@/components/Outlet/Title/Title';
import { Button } from '@mui/material';
import Item from './components/Item';
import { about } from '../../about.data';
import * as classes from './style';

export default function MainInfo() {
  return (
    <section css={classes.mainInfo}>
      <Container>
        <div css={classes.items}>
          {about.items.map(({ id, title, img, subtitle }) => (
            <Item
              key={id}
              title={title}
              img={img}
              subtitle={subtitle}
            />
          ))}
        </div>
        <div css={classes.bottom}>
          <Title
          fontSize='36px'
            text={about.lastTitle}
            color='#fff'
          />
          <Button href='/usa'>Book now</Button>
        </div>
      </Container>
    </section>
  );
}
