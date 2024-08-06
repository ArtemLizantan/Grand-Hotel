import React, { Suspense } from 'react';
import { GetStaticProps } from 'next';
import Preloader from '@/components/Layout/Spinner/Spinner';

// Динамический импорт компонентов
const ContactUs = React.lazy(() => import('@/components/Outlet/ContactUs/ContactUs'));
const Hero = React.lazy(() => import('@/components/Outlet/Hero/Hero'));
const Items = React.lazy(() => import('@/components/Outlet/Items/Items'));
const Preview = React.lazy(() => import('@/components/Outlet/Preview/Preview'));
const Reviews = React.lazy(() => import('@/components/Outlet/Reviews'));

export default function HomePage() {
  // TODO: Add components
  return (
    <Suspense fallback={<Preloader />}>
      <Hero />
      <Items />
      <Reviews />
      <Preview />
      <ContactUs />
    </Suspense>
  );
}

// TODO: Add title and description
export const getStaticProps: GetStaticProps = async () => {
  const meta = {
    title: 'Grand Hotel | Main',
    description: '',
  };

  return {
    props: {
      meta,
    },
  };
};
