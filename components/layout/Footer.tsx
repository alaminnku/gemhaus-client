import styles from '@components/layout/Footer.module.css';
import Logo from './Logo';
import { FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Logo isDarkBackground={true} />

      <div className={styles.socials}>
        <a
          href='https://www.facebook.com/profile.php?id=61551761890999'
          target='_blank'
        >
          <FaFacebookF />
        </a>

        <a href='https://www.instagram.com/gemhausgroup/' target='_blank'>
          <FiInstagram />
        </a>

        <a href='https://twitter.com/GemHausGroup' target='_blank'>
          <FaTwitter />
        </a>

        <a
          href='https://www.youtube.com/channel/UC7qEyohm83uLSD44-eTpQHA'
          target='_blank'
        >
          <AiOutlineYoutube />
        </a>
      </div>
    </footer>
  );
}
