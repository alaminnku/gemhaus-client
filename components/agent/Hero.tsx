import Image from 'next/image';
import styles from './Hero.module.css';
import AgentButton from './AgentButton';
import { Agent } from 'types';
import { QRCodeSVG } from 'qrcode.react';

type Props = {
  agent: Agent;
};

export default function Hero({ agent }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <Image
          src={agent.image}
          width={500}
          height={500}
          alt={`${agent.name}'s image`}
          className={styles.agent_image}
        />

        <div className={styles.cta}>
          <AgentButton id={agent._id} name={agent.name} />
          <QRCodeSVG value={agent.qrCodeLink} className={styles.qr_code} />
        </div>
      </div>

      <div className={styles.content}>
        <h1>{agent.name}</h1>
        <p className={styles.address}>{agent.address}</p>
        <p className={styles.email}>{agent.email}</p>
        <p className={styles.phone}>{agent.phone}</p>
        <div dangerouslySetInnerHTML={{ __html: agent.bio }}></div>
      </div>
    </section>
  );
}
