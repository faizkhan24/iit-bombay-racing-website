import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { GoMoveToTop } from "react-icons/go";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        if (window.pageYOffset > 400) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full bg-white h-[350px] relative top-[50rem] border  flex gap-28">
      <div data-aos="fade-right">
        <img
          className="w-[280px] relative top-20"
          src="https://www.iitbracing.org/assets/Blog-post/racing_website_logo_blue.png"
        ></img>
      </div>
      <div className="mt-10 " data-aos="fade-right">
        <h2 className="text-[22.5px] font-bold">Racing Team IIT Bombay</h2>
        <p className="max-w-[393px] font-semibold text-[#686666] py-2">
          IIT Bombay Racing is India's premier Formula Student Electric team
          with a vision to "Revolutionize Electric Mobility in India.
        </p>
      </div>

      <div className="mt-10" data-aos="fade-left">
        <h2 className="text-[22.5px] font-bold">Magazine</h2>
        <p className="max-w-[393px] font-semibold text-[#686666] py-2 ">
          Stay update with our latest
        </p>

        <div className="w-36 h-8 bg-red-700 py-1  px-5 relative text-white font-bold shadow-lg">
          Email
          <button className="absolute left-28 font-extrabold text-black py-1 bg-white">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>

      <div className="mt-10" data-aos="fade-left">
        <h2 className="text-[22.5px] font-bold">Contact Us</h2>
        <div className="flex items-center gap-1">
          <FiPhoneCall />
          <span className="max-w-[393px] font-semibold  py-2 "> 875692712</span>
        </div>

        <div className="flex items-center gap-1">
          <FiPhoneCall />
          <span className="max-w-[393px] font-semibold  py-2 ">9930779212</span>
        </div>
        <div className="flex items-center gap-1">
          <FaLocationDot />
          <span className="max-w-[393px] font-semibold  py-2 ">
            {" "}
            IIT Bombay,Powai,
          </span>
        </div>
        <p className="max-w-[393px] font-semibold  py-2">400063,India</p>
      </div>
      <div className="mt-10"  data-aos="fade-left">
        <h2 className="text-[22.5px] font-bold">Follow us</h2>
        <p className="max-w-[393px] text-[#686666] font-semibold  py-2">
          Let us be Social
        </p>
        <div className="flex gap-3 mt-5 items-center">
          <img className="w-[45px] h-[45px]" src="\images\pngegg (3).png"></img>
          <img className="w-[45px] h-[45px]" src="\images\pngegg (4).png"></img>
          <img className="w-[40px] h-[40px]" src="\images\pngegg (5).png"></img>
          <img className="w-[35px] h-[30px]" src="\images\pngegg (6).png"></img>
        </div>
      </div>

      {showButton && (
        <div className="fixed bottom-10 right-10">
          <button onClick={scrollToTop} className="bg-red-700 p-5 text-[20px] rounded-full text-white">
            <GoMoveToTop />
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
