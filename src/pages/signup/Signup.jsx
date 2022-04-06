import { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName);
  }
  
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="Email">
        <span>Email: </span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="Password">
        <span>Password: </span>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label htmlFor="DisplayName">
        <span>Display Name: </span>
        <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} />
      </label>
      <button type='submit' className="btn">Signup</button>
    </form>
  )
}

export default Signup