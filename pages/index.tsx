import Link from 'next/link';

export const Home = (): JSX.Element => (
  <div className="container">
    <p>
      This blog is deprecated. You may find the updated version at{' '}
      <Link href="/update">
        <a>this address.</a>
      </Link>
    </p>
  </div>
);

export default Home;
