import Container from '../Container';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Item from './components/Item';
import { itemsData } from './items.data';
import * as classes from './style';

export default function Items() {
  return (
    <section>
      <Container>
        <div css={classes.body}>
          <div css={classes.top}>
            <Title
              color='#000'
              text={itemsData.title}
            />
            <Subtitle
              color='#666'
              text={itemsData.subtitle}
            />
          </div>
          <div css={classes.bottom}>
            {itemsData.items.map(({ id, title, img }) => (
              <Item
                key={id}
                title={title}
                img={img}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
