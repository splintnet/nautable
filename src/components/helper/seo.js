import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = '',
  author = 'nautable',
  meta,
  title = 'nautable - yachting and much more',
}) {
  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }) => (
        <meta
          key={name}
          name={name}
          content={content}
        />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: 'de',
  meta: [],
  description: '',
};
