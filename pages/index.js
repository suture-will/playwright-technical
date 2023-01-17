import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data.abilities);
        setImage(data.sprites.front_default);
      });
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
          <h2>Dittos Abilities:</h2>
          <div
            style={{
              display: 'flex',
              direction: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '200px',
              height: '100px',
            }}
          >
            <img src={image} />
            {pokemon.map((item) => {
              return (
                <div
                  key={item.ability.name}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <p data-testid='ditto-abilities'>{item.ability.name}</p>
                </div>
              );
            })}
          </div>
          <button
            style={{ backgroundColor: '#1E6BE8', color: '#FFFFFF', w: '200px', h: '80px' }}
            onClick={() => handleSubmit()}
            id='get-ditto-data'
          >
            Get Ditto Data
          </button>
        </div>
      </main>
    </div>
  );
}
