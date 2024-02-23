// Cars.js

import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from "aos";
import carsData from './contants/carsData';

const Cars = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="relative top-[7rem] flex flex-col justify-center py-36">
      <h1 className="text-[40px] font-bold text-center ">Our Legacy</h1>
      <div className=" flex justify-center">
        <p className="text-[18px] my-7 text-center font-semibold max-w-[1130px] text-black leading-9">
          "Fuelled by passion, precision, and a legacy of speed, our racing team
          at IIT Bombay has left tire marks on the tracks and indelible memories
          in the hearts of enthusiasts. Celebrating the spirit of innovation and
          performance, we pave the way for future racers, leaving a legacy that
          accelerates beyond the finish line."
        </p>
      </div>
      {/* Render cards dynamically */}
      <div className="flex flex-wrap gap-40 justify-center my-60 mx-20">
        {carsData.map((card) => (
          <div
            key={card.id}
            className="w-[330px] h-[370px] rounded-lg  bg-white shadow-2xl mb-10"
            data-aos="zoom-in"
          >
            <img
              className="w-[350px] h-[200px]  rounded-tl-md rounded-tr-md"
              src={card.imageUrl}
              alt={card.title}
            />
            <p className="text-[24px] font-bold py-3 px-3">{card.title}</p>
            <p className="px-3">{card.description}</p>
          </div>
        ))}
      </div>
      {/* Remaining JSX content */}
    </div>
  );
};

export default Cars;
