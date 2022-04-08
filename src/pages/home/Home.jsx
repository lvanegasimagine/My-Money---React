import React from 'react';
import TransactionForm from '../Forms/TransactionForm';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transaction List
      </div>
      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}

export default Home