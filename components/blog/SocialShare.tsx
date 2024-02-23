'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import styles from './SocialShare.module.css';
import { useEffect, useState } from 'react';

export default function SocialShare() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <div className={styles.container}>
      <h2>Share this Article</h2>

      <div className={styles.icons}>
        <FacebookShareButton url={url}>
          <img src='/blog/facebook-icon.png' alt='Facebook icon' />
        </FacebookShareButton>

        <LinkedinShareButton url={url}>
          <img src='/blog/linkedin-icon.png' alt='Facebook icon' />
        </LinkedinShareButton>

        <TwitterShareButton url={url}>
          <img src='/blog/x-icon.png' alt='X icon' />
        </TwitterShareButton>
      </div>
    </div>
  );
}
