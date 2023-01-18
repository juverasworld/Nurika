import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
// import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <section>
      <Head>
        <title>First Post</title>
      </Head>
      <div className={`min-w-screen ${styles.Header}`}>
        <p className=" flex-1 ">Nurika</p>
        <ol className="list-none sm:flex hidden justify-end items-center flex-1 ">
          <li className='mr-10' ><Link href="/">home</Link></li>
          <li className='mr-10' ><Link href="/Post/Whitepaper">Whitepaper</Link></li>
          <li className='mr-10'><Link href="/Post/Community">Community</Link></li>
          <li className='mr-10'><Link href="/Post/
          Team">Team</Link></li>
        </ol>
        <button className='text-pink-800' >Join the waitlist</button>
      </div>
      <div className={styles.container_fluid}>
      <div className={`text-black-900 text-[50px] min-w-screen min-h-screen mx-auto flex items-center justify-center ${styles.AppGlass1}`}> YOUR ACCOUNTABILIY <br/>  PATNER
      </div>
      </div>
    </section >
  );
}