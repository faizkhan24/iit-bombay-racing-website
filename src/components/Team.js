import React from 'react';
import './Team.css';
import cardData from './contants/cardData';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Team = () => {

    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <div className="card-container">
            <div className='w-full relative left-[15%] top-[10rem]'>
           <img style={{width: '70%', height: '550px', objectFit: 'cover'}} className='shadow-2xl border-4 border-black' src='https://www.iitbracing.org/assets/Blog-post/_DSC0213.JPG'></img>      
            </div>
      


            {cardData.map((card, index) => (
                <article key={index} className="card" data-aos="zoom-in" data-aos-delay="300">
                    <img
                        className="card__background " 
                        src={card.imageUrl}
                        alt={`Photo ${index}`}
                        
                    />
                    <div className="card__content | flow">
                        <div className="card__content--container | flow">
                            <h2 className="card__title">{card.title}</h2>
                            {/* <p className="card__description font-bold">{card.description}</p> */}
                            <p className='font-bold text-lg' >{card.role}</p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Team;
