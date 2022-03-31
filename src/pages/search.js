import SEO from "../components/helper/seo";
import {fetchAPI} from "../lib/connect";
import SearchItem from "../components/search/item";

export const getServerSideProps = async () => {
  const {data} = await fetchAPI('/search', {
    page: 1,
    limit: 25,
    group: 'model',
  })
  return {
    props: {
      data: data,
    },
  };
};

export default function Search({data}) {
  return (
    <div>
      <SEO title="Search"/>
      {data.map((item) => (
        <SearchItem item={item}/>
      ))}
    </div>
  )
}
