import { useState, useEffect } from 'react';

export default function Game() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button style={{
        width: '150px',
        height: '150px',
        fontSize: '24px',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '50%',
        border: '4px solid darkred',
        boxShadow: '0 0 20px rgba(255,0,0,0.5)'
      }}>
        PRESS
      </button>
      <h1>Time Left: {count}s</h1>
    </div>
  );
}
