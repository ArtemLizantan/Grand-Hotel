// TODO: Import GetStaticProps
// If you are not using GetStaticProps, the title will come from ./constants/meta.ts
import { GetStaticProps } from 'next';

export default function TermsAndConditionsPage() {
  // TODO: Add components
  return <div>Terms and Conditions</div>;
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
