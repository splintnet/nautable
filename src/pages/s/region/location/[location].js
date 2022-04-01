import { useRouter } from 'next/router';
import SEO from '../../../../components/helper/seo';

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      data: data.slice(0, 4),
    },
  };
};

export default function SearchCountryRegionLocation() {
  const router = useRouter();

  return (
    <div>
      <SEO title="Search" />
      {router.params.country}
    </div>
  );
}
