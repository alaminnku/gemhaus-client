import styles from './Socials.module.css';

export default function Socials() {
  return (
    <div className={styles.container}>
      <a
        href='https://www.facebook.com/profile.php?id=61551761890999'
        target='_blank'
      >
        <img src='/layout/facebook-icon.png' className={styles.facebook_icon} />
      </a>

      <a href='https://www.instagram.com/gemhausgroup/' target='_blank'>
        <img
          src='/layout/instagram-icon.png'
          className={styles.instagram_icon}
        />
      </a>

      <a href='https://twitter.com/GemHausGroup' target='_blank'>
        <img src='/layout/twitter-icon.png' className={styles.twitter_icon} />
      </a>

      <a
        href='https://www.youtube.com/channel/UC7qEyohm83uLSD44-eTpQHA'
        target='_blank'
      >
        <img src='/layout/youtube-icon.png' className={styles.youtube_icon} />
      </a>
    </div>
  );
}
