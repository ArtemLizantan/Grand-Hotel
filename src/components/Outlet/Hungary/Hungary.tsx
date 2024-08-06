import BackgroundSection from '../BackgroundSection';
import CasinoItem from '../CasinoItem/CasinoItem';
import Container from '../Container';
import { hungary } from './hungary.data';
import * as classes from './style';

export default function Hungary() {
  return (
    <>
      <BackgroundSection
        subtitle={hungary.subtitle}
        title={hungary.title}
        path={hungary.img}
      />
      <Container>
        <div css={classes.cards}>
          {hungary.cards.map(({ id, title, subtitle, path, img }) => (
            <CasinoItem
              key={id}
              title={title}
              subtitle={subtitle}
              path={path}
              img={img}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
