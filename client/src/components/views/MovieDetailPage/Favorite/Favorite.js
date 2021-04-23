import React, {useEffect, useState} from 'react'
import './Favorite.scss';
import axios from 'axios';
import { Button } from 'antd';

function Favorite(props) {
    const [favoriteNumber, setFavoriteNumber] = useState(0);
    const [favorited, setFavorited] = useState(false);

    const variable = {
        userFrom: props.userFrom,
        movieId: props.movieId,
        movieTitle: props.movieInfo.original_title,
        movieImage: props.movieInfo.backdrop_path,
        movieRunTime: props.movieInfo.runtime,
    }

    useEffect(() => {
        axios.post('/api/favorite/favoriteNumber', variable)
            .then(res => {
                if (res.data.success) {
                    setFavoriteNumber(res.data.favoriteNumber);
                } else {
                    console.log('Failed to get the favoriteNumber')
            }
            })
        
        axios.post('/api/favorite/favorited', variable)
            .then(res => {
                if (res.data.success) {
                    setFavorited(res.data.favorited)
                } else {
                    console.log('Failed to get Favorite Info')
            }
        })
    }, [])

    const handleFav = () => {
        if (favorited) {
            axios.post('/api/favorite/removeFromFavorite', variable)
                .then(res => {
                if (res.status === 200) {
                    setFavoriteNumber(favoriteNumber-1)
                    setFavorited(!favorited)
                } else {
                    alert('Failed to remove from favorite')
            }
        })

        } else {
            axios.post('/api/favorite/addToFavorite', variable)
                .then(res => {
                    if (res.status === 200) {
                        setFavoriteNumber(favoriteNumber+1)
                        setFavorited(!favorited)
                    } else {
                        alert('Failed adding to Favorites')
                }
            })
        }
    }

    return (
        <div>
            <Button onClick={handleFav}>{favorited ? 'remove from Favorite ' : 'Add to Favorite '}{ favoriteNumber}</Button>
        </div>
    )
}

export default Favorite;
