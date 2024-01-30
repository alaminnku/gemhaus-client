import { MdErrorOutline } from 'react-icons/md';
import styles from './Alert.module.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Alert } from 'types';

type Props = {
  alerts: Alert[];
};

export default function Alert({ alerts }: Props) {
  return (
    <>
      {alerts.length > 0 && (
        <div className={styles.container}>
          {alerts.map((alert, index) => (
            <div
              key={index}
              className={`${styles.alert} ${
                alert.type === 'success' && styles.success
              } ${alert.type === 'failed' && styles.failed}`}
            >
              <p>
                {alert.type === 'success' ? (
                  <IoMdCheckmarkCircleOutline className={styles.icon} />
                ) : (
                  <MdErrorOutline className={styles.icon} />
                )}
                {alert.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
