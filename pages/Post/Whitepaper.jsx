import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from '../../styles/Home.module.css'
// import styles from './styles/Home.module.css';
// import styles from './styles/Home.module.css';

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
          <li className='mr-10' ><Link href="/post/About">home</Link></li>
          <li className='mr-10' ><Link href="/Post/Whitepaper">Whitepaper</Link></li>
          <li className='mr-10'><Link href="/Post/Community">Community</Link></li>
          <li className='mr-10'><Link href="/Post/
          Team">Team</Link></li>
        </ol>
        <button className='text-pink-800' >Join the waitlist</button>
      </div>
      <div className={styles.container_fluid}>
        <div>NURIKA</div>
        {/* <div className={`text-black ${styles.Whitepaper}`}>
          <div>
            ñurika is a free lifestyle app that rewards users for engagingin physical activities like walking, jogging, running, skipping, etc. with the notion that when people become more physically active, they’re more likely to improve their health in other areas too.
          </div>
          <div >
            We’re on a mission to reward healthy habits as a way to encourage a healthier planet with happy people.
            Exercise is self-fulfilling. Take a walk today. It pays to walk. </div>

          <p className="text-green-400"> WE DESIGNED NURIKA TO PROMOTE HEALTHY LIFESTYLES </p>
          <div>
            Lifestyle diseases share risk factors similar to prolonged exposure to three modifiable lifestyle behaviours -- physical inactivity, unhealthy diet, and smoking -- and result in the development of chronic diseases, specifically heart disease, stroke, diabetes, obesity, metabolic syndrome, chronic obstructive pulmonary disease, and some types of cancer. These illnesses used to be considered the diseases of industrialized countries, so-called "Western diseases" or "diseases of affluence"; however, internationally they are known as non-communicable and chronic diseases, part of the degenerative diseases group. Chronic disease can result in loss of independence, years of disability, or death, and impose a considerable economic burden on health services.
          </div>
          <div>
            Today, chronic diseases are a major public health problem worldwide. In 2005, the World Health Organization (WHO) estimated that 61 percent of all deaths -- 35 million -- and 49 percent of the global burden of disease were attributable to chronic diseases. By 2030, the proportion of total global deaths due to chronic diseases is expected to increase to 70 percent and the global burden of disease to 56 percent. The greatest increase is anticipated in the African and Eastern Mediterranean regions.
          </div>
          <div>
            The World Health Assembly adopted a resolution in 2000 on the prevention and control of chronic diseases. It called on its Member States to develop national policy frameworks, taking into account healthy public policies as well as fiscal and taxation measures towards healthy and unhealthy goods and services. The resolution also asked to establish programmes for the prevention and control of chronic diseases; assess and monitor mortality and the proportion of sickness in an area due to chronic diseases; promote effective secondary and tertiary prevention; and develop guidelines for cost-effective screening, diagnosis, and treatment of chronic diseases, with special emphasis in developing countries.
          </div>
          <div>
            The combination of four healthy lifestyle factors -- maintaining a healthy weight, exercising regularly, following a healthy diet, and not smoking -- seem to be associated with as much as an 80 percent reduction in the risk of developing the most common and deadly chronic diseases. This reinforces the current public health recommendations for the observance of healthy lifestyle habits, and because the roots of these habits often originate during the formative stages of life, it is imperative to start early in teaching important lessons concerning healthy living.
          </div>
          <div>
            However, despite the well-known benefits of a healthy lifestyle, only a small proportion of adults follow such a routine; in fact, the numbers are declining. There needs to be more public awareness of the association between health and lifestyle. Many are unaware that lifestyle change is an essential factor in the emergence of chronic diseases as causes of increased morbidity and mortality. Lifestyle is generally considered a personal issue. However, lifestyles are social practices and ways of living adopted by individuals that reflect personal, group, and socio-economic identities.
          </div>
          <div>
            Modest but achievable adjustments to lifestyle behaviors are likely to have a considerable impact at the individual and population levels. Health professionals and the media now repeatedly carry the message that to remain healthy, people need to adopt healthy behaviors.
          </div>
          <div>
            Physical activity, cessation of tobacco consumption, eating a high-fiber, low-fat diet, controlling body weight, and learning to cope with stress reduce the risk of cardiovascular disease, cancer, and premature mortality.
          </div>
          <div>
            Effective public health measures are urgently needed to promote physical activity and improve health around the world. The challenge of promoting physical activity is as much the responsibility of governments, as of the people. However, individual action for physical activity is influenced by the environment, sports and recreational facilities, and national policy. It requires coordination among many sectors, such as health, sports, education and culture policy, media and information, transport, urban planning, local governments, and financial and economic planning.
          </div>
          <div>
            Hence, we designed the Nurika token to incentivize people to stay healthy by engaging in physical and mental activities like walking, jogging, running, swimming, skipping, meditation, etc.
          </div>
        </div> */}
      </div>
    </section>

  );
}