import { useRouter } from 'next/router';
import SEO from '../../components/helper/seo';
import { fetchAPI } from '../../lib/connect';

export const getServerSideProps = async (context) => {
  const { data } = await fetchAPI(`/boat/${context.params.slug.split('-')[0]}`);

  return {
    props: {
      boat: data,
    },
  };
};

export default function Boat({ boat }) {
  const router = useRouter();
  const { bookingQuery } = router.params;

  return (
    <div>
      <SEO title={boat.title} />
      {boat.title}
      {' '}
      {bookingQuery}
    </div>
  );
}
