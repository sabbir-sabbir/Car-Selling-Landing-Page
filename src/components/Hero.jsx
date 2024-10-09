import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default function Hero() {
  return (
    <>
      <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <div className="text-center HeroAria">
            <p className="mt-5 BrandColor">Meet your new car</p>
            <h1 className="brandHeading">Honda Civic Type R</h1>
            <div className="HeroButton">
            <button className="btn btn-outline-secondary font-weight-bold me-3 TestDrive">More Details</button>
            <button className="btn btn-primary font-weight-bold TestDrive">Test Drive</button>
            </div>
           
        </div>
        <div className="Heroimg">
            <img className="d-block w-100"  src="\public\img\hero.png" alt="hero-image" />
        </div>
      </Carousel.Item>

      <Carousel.Item>  
        <div className="text-center HeroAria">
            <p className="mt-5 BrandColor">Visit our community</p>
            <h1 className="brandHeading">Find your new TOYOTA</h1>
            <div className="HeroButton">
            <button className="btn btn-outline-secondary font-weight-bold me-3">More Details</button>
            <button className="btn btn-primary font-weight-bold TestDrive">Test Drive</button>
            </div>
           
        </div>
        <div className="Heroimg">
            <img className="d-block w-100"  src="\public\img\hero.png" alt="hero-image" />
        </div>
      </Carousel.Item>

      <Carousel.Item> 
        <div className="text-center HeroAria">
            <p className="mt-5 BrandColor">Hire with test drive</p>
            <h1 className="brandHeading">Few days used Cars </h1>
            <div className="HeroButton">
            <button className="btn btn-outline-secondary font-weight-bold me-3">More Details</button>
            <button className="btn btn-primary font-weight-bold TestDrive">Test Drive</button>
            </div>
           
        </div>
        <div className="Heroimg">
            <img className="d-block w-100"  src="\public\img\hero.png" alt="hero-image" />
        </div>
      </Carousel.Item>
      </Carousel>
    </>
  )
}
