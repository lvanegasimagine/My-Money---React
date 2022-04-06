import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
      <button className="btn" type="submit">Login</button>
    </form>
  );
};

export default Login;
