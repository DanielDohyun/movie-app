import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from '../../Config';
import './landing.scss';
import { Typography, Row } from 'antd';
const { Title } = Typography;

function LandingPage() {
    const [] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(res => console.log(res))
    
    }, [])
    
    return (
        <div className='landing'>
            <div className='landing__mainImg'>

            </div>
            <div className="landing__movieBox">
                <Title className='landing__title' level={2}>Title</Title>
                <p className='landing__text' >Text</p>
            </div>
            
            <div className="landing__body">
                <Title className='landing__bodyTitle' level={2}>Movies by latest</Title>
                <hr />
                
                {/* grid cards */}
                <Row gutter={[16, 16]}>

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
