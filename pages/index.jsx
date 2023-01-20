import Head from 'next/head'
import styles from '../styles/Home.module.css';
import infinity from '../public/infinity.png';
import Link from 'next/link';
import close from '../public/close.svg';
import menu from '../public/menu.svg';
import Image from 'next/image';
import { useState } from 'react';
// import { close, menu } from '../public';
import { navLinks } from './Post/constants';

export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <section >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='w-full flex py-6 justify-between items-center navbar'>
        <p>Nurika</p>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (<li>
            <Link key={nav.id}
            href= {`/${nav.id}`}
            className={`font-lato font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a>{nav.title}</a> </Link>
          </li>))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li>
                <Link key={nav.id}
                 href= {`/${nav.id}`} >
                  
                  className={`font-lato font-normal cursor-pointer text-[16px] text-black ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}
                
                  <a >{nav.title}</a></Link>
                </li>))}
            </ul>

          </div>
        </div>
      </nav>
      {/* <div className={`min-w-screen ${styles.Header}`}>
        <p>Nurika</p>
        <ol className="list-none sm:flex hidden justify-end items-center flex-1 ">
          <li className='mr-10' ><Link href="/Post/About">About</Link></li>
          <li className='mr-10' ><Link href="/Post/Whitepaper">Whitepaper</Link></li>
          <li className='mr-10'><Link href="/Post/Community">Community</Link></li>
          <li className='mr-10'><Link href="/Post/Team">Team</Link></li>
        </ol>
        <Link href='/Post/Waitlist'>
          <button className={`mr-4${styles.button1}`} >Join the waitlist</button> </Link>
      </div> */}
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