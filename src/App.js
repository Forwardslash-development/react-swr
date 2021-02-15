import React from 'react';
import useSWR from 'swr';
import { Pokemon } from './components/Pokemon';
import './styles.css';

const url = 'https://pokeapi.co/api/v2/pokemon';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data: result, error } = useSWR(url, fetcher);
  if (error) return <h1>Something went wrong.</h1>;
  if (!result) return <h1>Loading...</h1>;

  return (
    <main className='App'>
      <h1>Pokedex</h1>
      <div>
        {result.results.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
}

export default App;
