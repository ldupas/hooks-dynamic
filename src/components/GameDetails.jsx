import axios from 'axios';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GameDetails = (props) => {
    const [trailer, setTrailer] = useState();
    const gameId = props.match.params.id;

    useEffect(() => {
        axios
        .get(`https://apis.wilders.dev/wild-games/games/${gameId}`)
        .then((res) => {
            setTrailer(res.data.clip.clip)
        })
    }, [gameId]);

    return(
        <section className='GameDetails'>
            <Link to={{pathname: '/'}}></Link>
            <span>Trailer:</span>
            <video controls src={trailer} />
        </section>
    )
}

export default GameDetails;