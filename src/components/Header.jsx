import React from 'react';

export default function Header({ user, setUser }) {
  return (
    <>
      <div>Welcome, {user}!</div>
      <button onClick={() => setUser('')}>Logout</button>
    </>
  );
}
