import React, { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from "aos";


const Card = () =>{
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
         <h1 className=" text-5xl font-bold text-center my-5">Our Missions</h1>
         <div className="bg-red-800 h-2 w-[400px] relative left-[47rem]"></div>
        <div className="flex flex-row justify-center gap-10 m-20  cards">
           
            
            <div className="w-[400px] h-[400px] shadow-lg border border-gray-300  py-10 rounded-lg  bg-white card-border" data-aos="fade-right" >
                <img className="h-[200px] -my-10 rounded-md " src="https://t3.ftcdn.net/jpg/06/67/26/30/240_F_667263017_oLSwz0q7RgwqEDZXybpyHTR9mV7jcOpy.jpg"></img>
                <h2 className="text-2xl text-center font-bold text-blue-500 py-14 ">"Electrifying Innovation"</h2>
                <p className="px-5 text-center -my-10 font-medium text-lg">Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.</p>
            </div> 
            <div className="w-[400px] h-[400px] shadow-lg border border-gray-300  py-10 rounded-md card-border  bg-white"data-aos="fade-left" >
            <img className="h-[200px] w-full -my-10 rounded-md" src="https://t4.ftcdn.net/jpg/01/36/51/23/240_F_136512373_ee4w1zpizIpg8MbyKWaQwbZv1Tg56fma.jpg"></img>
                <h2 className="text-2xl text-center font-bold text-red-500 py-14 ">"Speeding Towards Excellence"</h2>
                <p className="px-5 text-center -my-10 font-medium text-lg">We're on a mission to achieve excellence in Formula Student Electric racing, showcasing our cutting-edge designs on a global stage.</p>
            </div>
       
            <div className="w-[400px] h-[400px] shadow-lg border border-gray-300  py-10 rounded-md card-border bg-white" data-aos="fade-down" >
            <img className="h-[200px] -my-10 rounded-md" src="https://t4.ftcdn.net/jpg/04/35/69/31/240_F_435693123_rNhUHxOolk7DmZrg6uh7nRFweprilWOT.jpg"></img>
                <h2 className="text-2xl text-center font-bold text-blue-500  py-14">"Driving India's Green Revolution"</h2>
                <p className="px-5 text-center -my-10  font-medium text-lg">Our mission is to revolutionize electric mobility in India, one race at a time, with eco-friendly and high-performance electric cars.</p>
            </div>
            <div className="w-[400px] h-[400px] shadow-lg border border-gray-300  py-10 rounded-md card-border bg-white" data-aos="fade-right" >
            <img className="h-[200px] -my-10 rounded-md" src="https://t3.ftcdn.net/jpg/07/14/33/52/240_F_714335283_R67RCVRUJpWPBQdoIawyKIwmsBzIOHFa.jpg"></img>
                <h2 className="text-2xl text-center font-bold text-red-500 py-14">"Engineering the Future"</h2>
                <p className="px-5 text-center -my-10 font-medium text-lg">At IIT Bombay Racing, we're on a mission to engineer a brighter, greener future through innovation, dedication, and teamwork.</p>
            </div>
 <img className="absolute -z-50 opacity-10 top-[50rem]" src="\images\pngegg.png"></img>

     
        </div>
        </>
    )
}

export default Card;
