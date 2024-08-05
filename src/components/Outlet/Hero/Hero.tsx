import Image from 'next/image';
import Container from '../Container';
import * as classes from './style';
import { heroData } from './hero.data';

export default function Hero() {
  return (
    <section css={classes.hero}>
      <Container>
        <div>
          <Image
            alt='bg'
            fill
            src={heroData.bg}
          />
          <div css={classes.content}>
            <h1 css={classes.title}>{heroData.title}</h1>
            <div
              style={{
                width: '100%',

                maxWidth: '900px',
                margin: '20px auto',
                borderRadius: '5px',
              }}>
              <div
                id='bookingAffiliateWidget_20faf1e7-d7e8-4614-9816-603d6ef01c84'
                style={{
                  overflow: 'visible',
                  position: 'relative',
                  height: '428px',
                  background: 'rgba(255, 255, 255, .8)',
                  padding: '20px',
                  borderRadius: '20px',
                }}>
                <iframe
                  src='https://www.booking.com/prelanding_product.html?responsive=true&amp;languagecode=default&amp;widget_id=20faf1e7-d7e8-4614-9816-603d6ef01c84&amp;aid=2265164'
                  style={{
                    padding: '20px',
                    border: '0px',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                    zIndex: 9999,
                  }}
                  title='Booking Affiliate Widget'
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
