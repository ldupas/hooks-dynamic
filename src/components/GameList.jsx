import { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

const GameList = () => {
    const [games, setGames] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [error, setError] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            axios
            .get('https://apis.wilders.dev/wild-games/games/')
            .then(res => setGames(res.data))
            .catch(err => { setIsError(!isError); setError({error})})
            .finally(() => setLoading(!loading))
        }
        fetchData()
    }, [])

    const handleDelete = (id) => {
        setGames(games.filter(item => item.id !== id))
    }

    return (
        <section className='GameList'>
            <button onClick={() => setIsFiltered(!isFiltered)}>
                {isFiltered ? 'All games' : 'Best games'}
            </button>
            <div>
                {!isFiltered 
                ? games.map((game) => (
                    <div key={game.id}>
                        <Game game={game} deleteGame={handleDelete} />
                    </div>
                )) 
                :
                games
                .filter((game) => game.rating > 4.5)
                .map((game) => (
                    <div key={game.id}>
                        <Game game={game} />
                    </div>
                ))

                }
            </div>
        </section>
    )

}

export default GameList;