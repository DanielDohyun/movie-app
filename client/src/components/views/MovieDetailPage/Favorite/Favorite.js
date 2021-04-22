import React, {useEffect, useState} from 'react'
import './Favorite.scss';
import axios from 'axios';
import { Button } from 'antd';

function Favorite(props) {
    const [favoriteNumber, setFavoriteNumber] = useState(0);

    useEffect(() => {

        const variable = {
            userFrom: props.userFrom,
            movieId: props.movieId,
            movieTitle: props.movieInfo.original_title,
            movieImage: props.movieInfo.backdrop_path,
            movieRunTime: props.movieInfo.runtime,
        }

        axios.post('/api/favorite/favoriteNumber', variable)
            .then(res => {
                if (res.data.success) {
                    setFavoriteNumber(res.data.favoriteNumber);
                } else {
                    alert('Failed to get the favoriteNumber')
            }
        })
    }, [])

    return (
        <div>
            <Button>Add to Favorite</Button>
            
        </div>
    )
}

export default Favorite;
