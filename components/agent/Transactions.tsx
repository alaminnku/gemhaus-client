import { Agent } from 'types';
import styles from './Transaction.module.css';
import { getFirstName } from '@lib/utils';

type Props = {
  agent: Agent;
};

export default function Transactions({ agent }: Props) {
  const soldTransactions = agent.transactions.filter(
    (transaction) => transaction.type === 'sold'
  );
  const firstName = getFirstName(agent.name);

  return (
    <section className={styles.container}>
      <h2>
        {firstName}'s Transaction <br /> History
      </h2>
      <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {soldTransactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.address}</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
