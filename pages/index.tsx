import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import Date from '../components/Date';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element {
  return (
    <Layout home={false}>
      <>
        <Head>
          <title>Deprecated Blog</title>
        </Head>
        <h1>Deprecated Blog</h1>
        Where all software come to die.
        <br />A blog by{' '}
        <a href="https://github.com/fabio-alvarenga">@fabio-alvarenga</a>
        <section>
          <h4>Latest blogs</h4>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
