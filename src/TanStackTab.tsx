import {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import PokemonCard from './PokemonCard';
import {fetchRandomPokemon} from './randomPokemonFetcher'


export default function TanStackTab(){

    const [currentPokemonHealth, setHealth] = useState(100);
    
    const {data, isLoading, isFetching, isError, refetch} = useQuery({
        queryKey: ['pokemon'], queryFn: fetchRandomPokemon, staleTime: 30000 });
    
    function attackPokemon() {
        const newHealth = Math.max(0, currentPokemonHealth - 25);
        if (newHealth === 0) { refetch(); setHealth(100); } else { setHealth(newHealth); }
    }
    
  

    return (
        <main>
          <h1>Pokemon Fetcher</h1>
          {isError ? (
            <div role="alert">
              <p>Could not fetch a pokemon</p>
              <button onClick={() => refetch()}>Try Again</button>
            </div>
          ) : isLoading ? (
            <p role="status">Loading Pokemon...</p>
          ) : null}
          {data && <PokemonCard pokemon={data} />}
          <p>Remaining health: {currentPokemonHealth}</p>
          <button onClick={attackPokemon} disabled={isFetching}>
            Attack Pokémon
          </button>
        </main>
      );

}