import Head from 'next/head'
import styles from '../styles/Home.module.css';
import infinity from '../public/infinity.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`min-w-screen ${styles.Header}`}>
        <p>Nurika</p>
        <ol className="list-none sm:flex hidden justify-end items-center flex-1 ">
          <li className='mr-10' ><Link href="/Post/About">About</Link></li>
          <li className='mr-10' ><Link href="/Post/Whitepaper">Whitepaper</Link></li>
          <li className='mr-10'><Link href="/Post/Community">Community</Link></li>
          <li className='mr-10'><Link href="/Post/Team">Team</Link></li>
        </ol>
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}>Join the waitlist</button>
      </div>
      <div className={styles.container_fluid} >
        <div className={`text-black-900 text-[150px] min-w-screen min-h-screen mx-auto flex items-center justify-center ${styles.AppGlass}`}>
         <p>
          Coming S<span>
            <Image
              src={infinity}
              alt="Infinity image"
              className={styles.image}
              />
          </span>
          n
          </p>
        </div>
      </div>
    </section>
  )
}