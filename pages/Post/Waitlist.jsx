import Head from "next/head";
import Link from "next/link";
import { socialMedia, footerLinks } from '../Post/constants'
// import styles from './styles/Home.module.css';
// import styles from './styles/Home.module.css';

export default function FirstPost() {
  return (
    <section>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className='flex flex-col ss:my-10 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-semibold text-[18x] leading-[27px] text-black' >
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer ${index !== footerLink.length - 1 ? 'mb-4' : 'mb-0'} `}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </section >
  );
}