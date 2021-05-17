import Image from 'next/image';
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
    <Layout home={true}>
      <>
        <Image
          priority
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt={'profile picture'}
        />
        <Head>
          <title>Deprecated Blog</title>
        </Head>
        <div className="container">
          <p>This blog is deprecated.</p>
        </div>

        <section>
          <h2>Latest blogs</h2>
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
