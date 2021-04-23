import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './FavoritePage.scss';
import { Popover } from 'antd';
import { IMAGE_URL } from '../../Config'

function FavoritePage() {
    const [favMovies, setFavMovies] = useState([]);

    const variables = {userFrom: localStorage.getItem('userId')}

    useEffect(() => {
        fetchFav()
    }, [])

    const fetchFav = () => {
        axios.post('/api/favorite/getFavoriteMovie', variables)
            .then(res => {
                if (res.data.success) {
                    setFavMovies(res.data.fav)
                } else {
                    alert('Failed to get favorite videos')
            }
        })
    }

    const handleRemove = (movieId) => {

        const variables = {
            movieId: movieId,
            userFrom: localStorage.getItem('userId')
        }

        axios.post('/api/favorite/removeFromFavorite', variables)
            .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        fetchFav();
                } else {
                    alert('Failed to remove from favorite')
            }
        })
    }

    const renderTableBody = favMovies.map((movie, i) => {

        const content = (
            <div>
                {movie.moviePost ? <img src={`${IMAGE_URL}w500${movie.moviePost}`} alt='moviePost'/> : "no Image"}
            </div>
        )

        return <tr>

            <Popover content={content} title={`${movie.movieTitle}`}>
                <td>{ movie.movieTitle}</td>
            </Popover>
            <td>{ movie.movieRunTime} mins</td>
            <td><button onClick={() => handleRemove(movie.movieId)}>Remove from the Favorites</button></td>
        </tr>
    })

    return (
        <div className='favorite'>
            <h3>Favorite Movies By Me</h3>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Movie RunTime</th>
                        <th>Remove from favorites</th>
                    </tr>
                </thead>

                <tbody>
                    {renderTableBody}
                </tbody>
            </table>
        </div>
    )
}

export default FavoritePage;
