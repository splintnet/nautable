import SEO from '../../../components/helper/seo';

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      data: data.slice(0, 4),
    },
  };
};

export default function SearchCountryRegion({ country }) {
  return (
    <div>
      <SEO title="Search" />
      {country}
    </div>
  );
}
