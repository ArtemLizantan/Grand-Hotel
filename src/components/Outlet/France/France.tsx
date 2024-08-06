import BackgroundSection from '../BackgroundSection';
import CasinoItem from '../CasinoItem/CasinoItem';
import Container from '../Container';
import { france } from './france.data';
import * as classes from './style';

export default function France() {
  return (
    <>
      <BackgroundSection
        subtitle={france.subtitle}
        title={france.title}
        path={france.img}
      />
      <Container>
        <div css={classes.cards}>
          {france.cards.map(({ id, title, subtitle, path, img }) => (
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
