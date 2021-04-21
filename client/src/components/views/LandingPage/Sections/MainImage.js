import React from 'react';
import './MainImage.scss';
import { Typography, Row } from 'antd';
const { Title } = Typography;

function MainImage(props) {
    return (
        <div className='main'>
            {/* backgroundImage: `url(${props.img})` */}
            <div className='main__img' style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('${props.img}'), #1c1c1c`,
                height: '500px',
                backgroundSize: '100%, cover',
                backgroundPosition: 'center, center',
                width: '100%',
                position: 'relative'
            }}>
                <div className="main__movieBox">
                    <Title style={{color: 'white'}} className='main_title' level={2}>{props.title}</Title>
                    <p className='main__text' >{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default MainImage
