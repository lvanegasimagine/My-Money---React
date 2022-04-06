import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const {signup, isPending, error} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
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
      {!isPending && <button type='submit' className="btn">Signup</button> }
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup