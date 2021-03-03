import { useState } from 'react';
import './Game.css';
import { Link } from 'react-router-dom';

export default function Game(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { game, deleteGame } = props

    return (
        <div className='Game'>
            <Link to={{ pathname: `/${game.id}`}}>
            <span>
                {game.name}
            </span>
            </Link>
            <span>
                Rated: {game.rating}
            </span>
            <button className='favorite' onClick={() => setIsFavorite(!isFavorite)}>
                {isFavorite ? 'Dislike' : 'Like'}
            </button>
            {isFavorite && (
                <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/yellow-heart.png" alt="favorite"/>
            )}
            <button onClick={() => deleteGame(game.id)}>
                Unshow
            </button>
        </div>
    )
}
