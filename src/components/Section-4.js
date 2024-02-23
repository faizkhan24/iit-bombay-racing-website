import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Section4 = () =>{
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-[40px] font-bold my-5 text-center text-[#4c4e61]">Driving Organizational and Technical Excellence</h1>
                <h3 className="text-[#991b1b] text-[40px] font-bold text-center">"Where Innovation Meets Excellence."</h3>
                <p className="text-[15px] text-[#a3a5ae] font-semibold text-center my-4">Our team has both Organizational and technical divisions which are further</p>
                <p className="text-[15px] text-[#a3a5ae] font-ssemibold text-center my-1">divided into mechanical, electrical and driverless subdivisions</p>
            </div>
            <div className="flex gap-20 relative">
                <div className="relative top-[10rem] left-[20rem] " data-aos='fade-right'>
                    <div className="w-[376px] h-[246px] bg-white  border-cyan-300 border-4  rounded-lg shadow-2xl">
                        <h3 className="font-bold text-2xl px-8 py-5">Electrical</h3>
                        <p className="px-8">"Electrifying Innovation: Powering Tomorrow's Mobility"</p>
                        <img className="relative left-72 top-10" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="icon"></img>
                    </div>
                </div>
                <div className="relative top-[20rem] left-[18.5rem]" data-aos='fade-up'>
                    <div className="w-[376px] h-[246px] bg-white  border-yellow-400 border-4  rounded-lg shadow-2xl">
                        <h3 className="font-bold text-2xl px-8 py-5">Organisational</h3>
                        <p className="px-8">"Elevating Excellence: Orchestrating Team Success"</p>
                        <img className="relative left-72 top-10" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="icon"></img>
                    </div>
                </div>
                <div className="relative right-[10rem] my-10">
                    <div className="w-[376px] h-[246px] bg-white  border-red-400 border-4 rounded-lg shadow-2xl" data-aos='fade-down'>
                        <h3 className="font-bold text-2xl px-8 py-5">Mechanical</h3>
                        <p className="px-8"> "Precision in Motion: Shaping Mechanical Excellence"</p>
                        <img className="relative left-72 top-10" src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="icon"></img>
                    </div>
                </div>
                <div className="relative top-[10rem] right-[12rem]" data-aos='fade-left'>
                    <div className="w-[376px] h-[246px] bg-white border-blue-400 border-4 rounded-lg shadow-2xl">
                        <h3 className="font-bold text-2xl px-8 py-5">Driverless</h3>
                        <p className="px-8">"Driving the Future: Pioneering Autonomous Excellence"</p>
                        <img className="relative left-72 top-10" src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="icon"></img>
                    </div>

                </div>  
               <div className="absolute top-[30rem] w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#991b1b" fillOpacity="1" d="M0,256L80,240C160,224,320,192,480,197.3C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>  
            </div>
           
        </> 
    )
}

export default Section4;
