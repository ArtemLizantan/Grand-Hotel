// TODO: Import GetStaticProps
// If you are not using GetStaticProps, the title will come from ./constants/meta.ts
import { GetStaticProps } from 'next';

export default function HomePage() {
  // TODO: Add components
  return <div>Home Page</div>;
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
