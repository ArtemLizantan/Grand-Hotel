import BackgroundSection from '../BackgroundSection';
import { about } from './about.data';
import InfoAbout from './components/InfoAbout/InfoAbout';
import MainInfo from './components/MainInfo/MainInfo';

export default function AboutUs() {
  return (
    <>
      <BackgroundSection
        title={about.title}
        path={about.img}
      />
      <InfoAbout
        title={about.title}
        subtitle={about.infoSubtitle}
        img={about.imgInfo}
      />
      <MainInfo />
    </>
  );
}
