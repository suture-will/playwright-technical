import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleSubmit = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Suture Health Playwright Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main} style={{ width: '100vw', height: '100vh' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <h1 className={styles.title}>Suture Health Demo</h1>
          <h3>{count}</h3>
          <button
            style={{ backgroundColor: '#1E6BE8', color: '#FFFFFF', w: '200px', h: '80px' }}
            onClick={() => handleSubmit()}
          >
            Increment
          </button>
        </div>
      </main>
    </div>
  );
}
