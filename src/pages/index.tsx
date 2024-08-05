// TODO: Import GetStaticProps
// If you are not using GetStaticProps, the title will come from ./constants/meta.ts
import ContactUs from '@/components/Outlet/ContactUs/ContactUs';
import Hero from '@/components/Outlet/Hero/Hero';
import Items from '@/components/Outlet/Items/Items';
import Preview from '@/components/Outlet/Preview/Preview';
import Reviews from '@/components/Outlet/Reviews';
import { GetStaticProps } from 'next';

export default function HomePage() {
  // TODO: Add components
  return (
    <>
      <Hero />
      <Items />
      <Reviews />
      <Preview />
      <ContactUs />
    </>
  );
}

// TODO: Add title and description
export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: '',
    description: '',
  };

  return {
    props: {
      meta,
    },
  };
};
