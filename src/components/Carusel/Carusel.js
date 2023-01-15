import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carusel.css';
import Image from 'react-bootstrap/Image'

const Carusel = () => {
    return (
        <div className='container my-5'>
            <Carousel>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src="https://i.imgur.com/b9zkoz0.jpg"
                        alt="Mobile-phones"
                    />
                    <Carousel.Caption>
                        <h2>Mobile-phones</h2>
                        <p style={{color:"black"}}>Rent the latest smartphones from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src="https://iili.io/HROmrbt.md.jpg"
                        alt="Mobile-phones"
                    />
                    <Carousel.Caption>
                        <h2>Home appliance</h2>
                        <p style={{color:"black"}}>Rent the latest home appliance from walton, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        style={{ height: "400px" }}
                        className="d-block"
                        src="https://i.imgur.com/6pK5oZl.jpg"
                        alt="Laptops"
                    />
                    <Carousel.Caption>
                        <h2>Laptops</h2>
                        <p style={{color:"black"}}>Rent the latest laptops from Apple, Samsung, Oppo and more, with an affordable rental plan from pase</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carusel;