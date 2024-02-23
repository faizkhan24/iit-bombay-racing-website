import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Section5 = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <>
      <div className="w-[1200px] h-[500px] bg-white relative top-[40rem] shadow-xl py-5 mt-20 border-[#a3a5ae] border-2 rounded-lg  left-36 " data-aos='fade-right'>
        <h1 className="text-center py-3 font-bold text-[#4c4e61] text-3xl">
          View 3-D Model
        </h1>
        <div className="sketchfab-embed-wrapper mx-5 rounded-lg overflow-hidden flex justify-center items-center">
          <iframe
            className="w-[1179px] h-[400px] rounded-lg"
            title="E12_first"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            xr-spatial-tracking
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
            src="https://sketchfab.com/models/b4c96cbfecf648b3a2fbf822df4ba37f/embed"
          ></iframe>
          
        </div>
      </div>
      <div className="relative top-[8rem] -right-[75%]  text-center " data-aos='fade-left' >
        <h2 className="text-4xl w-[362px]  max-h-[360px]  font-extrabold ">
        <div className="text-center">
      <h2 className="text-5xl font-bold leading-snug  " style={{ background: '#121FCF', background: 'linear-gradient(to right, #121FCF 0%, #CF1512 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        View 3-D Model <br />
        of <br />
        E12 First <br />
        by <br />
        IIT Bombay Racing
      </h2>
    </div>
        </h2>
      </div>
    </>
  );
};

export default Section5;
