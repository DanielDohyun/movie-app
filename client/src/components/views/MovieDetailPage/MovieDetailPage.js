import React, {useEffect, useState} from 'react'
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import './MovieDetailPage.scss';
import { Descriptions, Button, Row } from 'antd';
import Cards from '../LandingPage/Sections/Cards';

function MovieDetailPage(props) {
    const [movie, SetMovie] = useState([]);
    const [crews, SetCrews] = useState([]);

    useEffect(() => {
        const movieId = props.match.params.movieId 
        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(res => {
                // console.log(res);
                SetMovie(res);

                fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                        SetCrews(res.cast);
                })
        })
    }, [])

    return (
        <div className='detail'>
             {
                movie &&
                <MainImage img={`${IMAGE_URL}w1280${movie.backdrop_path && movie.backdrop_path}`} title={movie.original_title} text={movie.overview} />
            }

            <div className='detail__container'>
                <div className='detail__btnContainer'>
                    <Button>Add to Favorite</Button>
                </div>

                {/* movie info table */}
                <Descriptions title='Movie Info' bordered>
                    <Descriptions.Item label='Title'>{ movie.original_title}</Descriptions.Item>
                    <Descriptions.Item label='release_date'>{movie.release_date }</Descriptions.Item>
                    <Descriptions.Item label='revenue'>{movie.revenue }</Descriptions.Item>
                    <Descriptions.Item label='runtime'>{ movie.runtime}</Descriptions.Item>
                    <Descriptions.Item label='vote_avg'>{ movie.vote_average}</Descriptions.Item>
                    <Descriptions.Item label='vote_count'>{ movie.vote_count}</Descriptions.Item>
                    <Descriptions.Item label='status'>{movie.status }</Descriptions.Item>
                    <Descriptions.Item label='popularity'>{ movie.popularity}</Descriptions.Item>
                </Descriptions>

                <div className='detail__toggleContainer'>
                    <Button>Toggle Actor View</Button>
                </div>

                <Row gutter={[16, 16]}>
                    {
                        crews && crews.map((crew, i) => (
                            <React.Fragment key={i}>
                                {
                                    crew.profile_path &&
                                    <Cards
                                        actor
                                        img={`${IMAGE_URL}w500${crew.profile_path}`}
                                    />
                                }
                            </React.Fragment>
                        ))
                    }
                </Row>

            </div>
        </div>
    )
}

export default MovieDetailPage
