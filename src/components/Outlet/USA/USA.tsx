import BackgroundSection from '../BackgroundSection';
import CasinoItem from '../CasinoItem/CasinoItem';
import Container from '../Container';
import { usa } from './usa.data';
import * as classes from './style';

export default function Usa() {
  return (
    <>
      <BackgroundSection
        subtitle={usa.subtitle}
        title={usa.title}
        path={usa.img}
      />
      <Container>
        <div css={classes.cards}>
          {usa.cards.map(({ id, title, subtitle, path, img }) => (
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
