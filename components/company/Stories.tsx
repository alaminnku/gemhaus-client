import Image from 'next/image';
import styles from './Stories.module.css';
import missionImage from '@public/company/mission.png';
import whyUsImage from '@public/company/why-us.png';
import communityImage from '@public/company/community-involvement.png';

export default function OurStory() {
  return (
    <section className={styles.container}>
      <div className={styles.story}>
        <h2>Our Story</h2>
        <p>
          GemHaus was born from a vision of innovation, excellence, and a
          relentless pursuit of redefining the real estate experience. In a
          rapidly evolving industry where the dynamics of real estate were
          shifting, we recognized a need for experts who could navigate this new
          age - a time where platforms like Airbnb were transforming the way
          people interact with property.
        </p>
        <p>
          Real estate isn't just about buying and selling properties; it's about
          embracing change and leveraging opportunities. It's about adapting to
          emerging trends, embracing the sharing economy, and providing tailored
          solutions to property owners, investors, and guests alike. At GemHaus,
          we've set out to create a dynamic and forward-thinking real estate
          brokerage that doesn't just keep pace with industry shifts but leads
          the way. We understand that success in real estate requires expertise,
          adaptability, and a commitment to meeting the unique needs of our
          clients.
        </p>
        <p>
          Our journey is driven by the belief that the future of real estate is
          an ever-evolving landscape where innovation meets tradition, and where
          personalized service thrives alongside cutting-edge technology. We're
          here to guide you through this exciting journey, offering a new
          paradigm for real estate that redefines what's possible.
        </p>
      </div>

      <div className={` ${styles.item} ${styles.mission}`}>
        <h3>Mission and Values</h3>
        <Image src={missionImage} alt='Mission image' />
      </div>
      <div className={styles.item}>
        <h3>Why Choose Us</h3>
        <Image src={whyUsImage} alt='Why choose us image' />
      </div>
      <div className={styles.item}>
        <h3>Community Involvement</h3>
        <Image src={communityImage} alt='Community involvement image' />
      </div>
    </section>
  );
}
