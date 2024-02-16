import Image from 'next/image';
import styles from './Hero.module.css';
import AgentButton from './AgentButton';

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <Image
          src='/agents/agent.png'
          width={500}
          height={500}
          alt='Agent image'
          className={styles.agent_image}
        />

        <div className={styles.cta}>
          <AgentButton />
          <Image
            src='/agent/qr-code.png'
            width={400}
            height={400}
            alt='Qr code'
            className={styles.qr_code}
          />
        </div>
      </div>

      <div className={styles.content}>
        <h1>Bill Thomas</h1>
        <p className={styles.address}>Agent, Scottsdale | South Bay</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.phone}>(626) 807-9132</p>
        <p className={styles.about}>
          Abbie Knowles brings strong local knowledge and unshakable
          professional polish to The Agency’s Scottsdale office. An Arizona
          native and specialized buyer’s agent, Abbie navigates every
          transaction with focus, compassion and enthusiasm. She enjoys guiding
          clients through the complex buying process and readily draws upon her
          in-depth knowledge of the East Valley and Scottsdale markets. “I love
          finding clients exactly what they’re looking for and helping them
          achieve their dreams,” says Abbie. After graduating from Northern
          Arizona University with a degree in Communications, Abbie worked as an
          account executive at Yelp and an event coordinator at luxury resort
          Club Med before obtaining her real estate license—both experiences
          that have influenced her approach to providing exceptional client
          service. Abbie donates her time to several philanthropic causes,
          including Feed My Starving Children. She and her husband also foster
          children through Catholic Charities and are active in Cornerstone
          Church events.
        </p>
      </div>
    </section>
  );
}
