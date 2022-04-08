import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending} = useLogin();
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  }
  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label htmlFor="Email">
        <span>Email:</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label htmlFor="Password">
        <span>Password:</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {!isPending && <button className="btn">Login</button> }
      {isPending && <button className='btn' disabled>Loading...</button>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Login;
