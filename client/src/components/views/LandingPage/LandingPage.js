import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY, IMAGE_URL } from '../../Config';
import './Landing.scss';
import { Typography, Row } from 'antd';
import MainImage from './Sections/MainImage';
import Cards from './Sections/Cards';
const { Title } = Typography;


function LandingPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(res => {
                console.log(res.results)
                setMovies(res.results)
            })
    
    }, [])

    console.log(`${IMAGE_URL}w1280${movies[2]?.backdrop_path && movies[2].backdrop_path}`)
    
    return (
        <div className='landing'>
            {
                movies[0] &&
                <MainImage img={`${IMAGE_URL}w1280${movies[0].backdrop_path && movies[0].backdrop_path}`} title={movies[0].original_title} text={movies[0].overview} />
            }
            
            <div className="landing__body">
                <Title className='landing__bodyTitle' level={2}>Movies by latest</Title>
                <hr />
                
                {/* grid cards */}
                <Row gutter={[16, 16]}>
                    {
                        movies && movies.map((movie, i) => (
                            <React.Fragment key={i}>
                                <Cards
                                    img={movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`}
                                    movieId={movie.id}
                                />
                            </React.Fragment>
                        ))
                    }
                </Row>

                <br />

                <div className="landing__btnContainer">
                    <button className='landing__btn'>Load More</button>
                </div>

            </div>
            
        </div>
    )
}

export default LandingPage
