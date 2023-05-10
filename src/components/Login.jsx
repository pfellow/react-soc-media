import { useState } from 'react';

export default function Login({ setUser }) {
  const [username, setUsername] = useState('');

  const inputChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(username);
    setUsername('');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <input
          onChange={inputChangeHandler}
          value={username}
          placeholder="Input username"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
