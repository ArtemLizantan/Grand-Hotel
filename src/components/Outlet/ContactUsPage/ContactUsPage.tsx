import BackgroundSection from '../BackgroundSection';
import ContactUs from '../ContactUs/ContactUs';
import Container from '../Container';
import { france } from './contact.data';

export default function ContactUsSection() {
  return (
    <>
      <BackgroundSection
        title={france.title}
        path={france.img}
      />
      <Container>
        <ContactUs />
      </Container>
    </>
  );
}
