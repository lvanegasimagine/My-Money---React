import { useFirestore } from '../../hooks/useFirestore';
import styles from '../home/Home.module.css';

export default function TransactionList({transactions}) {

  const { deletedDocument, response } = useFirestore('transactions');
  return (
   <ul className={styles.transactions}>
      {transactions.map(transaction => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>${transaction.amount}</p>
          <button onClick={() => deletedDocument(transaction.id)}>X</button>
        </li>
      ))
      }
   </ul>
  )
}
