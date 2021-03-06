import React from 'react'
import './Cards.scss';
import { Col } from 'antd';

function Cards(props) {

    if (props.actor) {
        return (
            <div className='card'>
                <Col lg={6} md={8} xs={24}>
                    <div className='card__container'>
                            <img className='card__img' src={props.img} alt="movie poster" />
                    </div>
                </Col>
            </div>
        )
    } else {
        return (
            <div className='card'>
                <Col lg={6} md={8} xs={24}>
                    <div className='card__container'>
                        <a href={`/movie/${props.movieId}`}>
                            <img className='card__img' src={props.img} alt="movie poster" />
                        </a>
                    </div>
                </Col>
            </div>
        )
    }
}

export default Cards
