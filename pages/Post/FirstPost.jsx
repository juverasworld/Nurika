import Head from "next/head";
import Link from "next/link";
// import styles from './styles/Home.module.css';
// import styles from './styles/Home.module.css';

export default function FirstPost() {
  return (
    <section>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </section >
  );
}
