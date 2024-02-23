import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Section3 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div
        className="flex relative left-[10rem] gap-40 w-[1180px] h-[500px] bg-white shadow-2xl rounded-lg border border-[#777777] transition-all duration-200 "
        data-aos="fade-left" data-aos-offset="500"
        data-aos-duration="500">
  
        <div>
          <img
            className="w-[150rem] h-[31rem] "
            src="https://www.iitbracing.org/assets/Blog-post/TeamHome.jpeg"
          ></img>
        </div>
        <div className="px-5">
          <h1 className="text-4xl font-bold py-3 text-violet-600">The Team</h1>
          <h2 className="text-xl font-bold py-5">
            "Driving Innovation, Powering Sustainability: IITB Racing"
          </h2>
          <p className="py-1 font-semibold text-[16px] text-gray-500">
            IIT Bombay Racing is India's premier Formula Student Electric team
            with a vision to "Revolutionize Electric Mobility in India focusing
            on sustainable technologies and innovations".
          </p>
          <p className="py-1 font-semibold text-[16px]  text-gray-500">
            IIT Bombay Racing stands at the forefront of India's Formula Student
            Electric teams, driven by an unwavering vision to spearhead a
            transformative shift in the landscape of electric mobility. Through
            relentless dedication and a passion for excellence, we are committed
            to propelling India into the global forefront of sustainable
            electric mobility solutions.
          </p>
          <button className="w-40 h-12 rounded-lg bg-[#991b1b] hover:bg-red-900  text-lg text-white font-bold my-3">
            Know More
          </button>
        </div>
      </div>
      <img className="w-[35rem] opacity-20 left-3 absolute" src="\images\pngegg (1).png"></img>
      <div
        className="flex relative left-[40rem] my-10 gap-40 w-[1180px] h-[500px] bg-white shadow-2xl rounded-lg border border-[#777777] "
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        
        <div>
          <img
            className="w-[150rem] h-[31rem] "
            src="https://www.iitbracing.org/assets/Blog-post/competitions3.jpeg"
          ></img>
        </div>
        <div className="px-5">
          <h1 className="text-4xl font-bold py-3 text-violet-900">
            Our Divisions...
          </h1>
          <p className="py-2 font-semibold text-[16px] text-gray-500">
            At IIT Bombay Racing, we pride ourselves on our structured approach
            to excellence. Our team is organized into two key divisions, each
            playing a crucial role in our mission to revolutionize electric
            mobility in India: the Organizational Division and the Technical
            Division. The Technical Division forms the heart of our team, and it
            is further subdivided into three specialized units.
          </p>
          <p className="py-2 font-semibold text-[16px]  text-gray-500">
            These divisions come together in harmony, each playing a unique role
            in achieving our collective vision. As we continue to push the
            envelope of sustainable technologies and innovations in Formula
            Student Electric competitions, our integrated approach ensures that
            every aspect of our work aligns with our goal of transforming the
            future of electric mobility in India.
          </p>
          <button className="w-40 h-12 rounded-lg bg-[#991b1b] hover:bg-red-900 text-lg text-white font-bold my-3">
            Know More
          </button>
        </div>
      </div>
    </>
  );
};

export default Section3;
