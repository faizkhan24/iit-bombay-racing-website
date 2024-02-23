import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Section6 = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative top-[30rem]">
      <h1 className="text-center text-5xl font-bold text-[#991b1b]">
        Our Accomplishments!
      </h1>

      <p className="text-center text-lg font-semibold my-7">
        Innovative, Competitive, Educational.
      </p>

      <div className="flex gap-20 justify-center  my-10 ">
        <div
          className="w-[338px] h-[309px] bg-white shadow-2xl rounded-lg py-8 border-2 border-[#b43939] card-border "
          data-aos="flip-right"
        >
          <h2 className="text-center text-[22.5px]  text-[#4c4e61] font-bold py-3">
            Formula Bharat
          </h2>
          <p className="text-center text-[22.5px] text-[#4c4e61] font-semibold py-3">
            1st in Business Presentation
          </p>
          <p className="text-center py-3">⭐⭐⭐⭐</p>
          <p className="text-center  text-[22.5px] text-[#4c4e61] font-semibold py-3">
            2022
          </p>
          <p
            className="text-center py-3 font-bold text-[20px]"
            style={{
              background: "#121FCF",
              background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            #Racing Up The Ladder
          </p>
        </div>
        <div
          className="w-[338px] h-[309px] bg-white shadow-2xl rounded-lg py-8 border-2 border-[#b43939] card-border "
          data-aos="flip-left"
        >
          <h2 className="text-center text-[22.5px]  text-[#4c4e61] font-bold py-3">
            Formula Bharat
          </h2>
          <p className="text-center text-[22.5px] text-[#4c4e61] font-semibold py-3">
            1st in Business Presentation
          </p>
          <p className="text-center py-3">⭐⭐⭐⭐</p>
          <p className="text-center  text-[22.5px] text-[#4c4e61] font-semibold py-3">
            2022
          </p>
          <p
            className="text-center py-3 font-bold text-[20px]"
            style={{
              background: "#121FCF",
              background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            #Racing Up The Ladder
          </p>
        </div>
        <div
          className="w-[338px] h-[309px] bg-white shadow-2xl rounded-lg py-8 border-2 border-[#b43939] card-border"
          data-aos="flip-right"
        >
          <h2 className="text-center text-[22.5px]  text-[#4c4e61] font-bold py-3">
            Formula Bharat
          </h2>
          <p className="text-center text-[22.5px] text-[#4c4e61] font-semibold py-3">
            1st in Business Presentation
          </p>
          <p className="text-center py-3">⭐⭐⭐⭐</p>
          <p className="text-center  text-[22.5px] text-[#4c4e61] font-semibold py-3">
            2022
          </p>
          <p
            className="text-center py-3 font-bold text-[20px]"
            style={{
              background: "#121FCF",
              background: "linear-gradient(to right, #121FCF 0%, #CF1512 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            #Racing Up The Ladder
          </p>
        </div>
      </div>
            
      <div className="w-[1100px] h-[317px] bg-white shadow-2xl  relative left-[26rem] flex top-[10rem] border border-[#777777] " data-aos="zoom-in">
        <div>
            <h1 className="text-center text-[40px] font-bold text-[#4c4e61] py-5">Our Lagacy</h1>
        <p className="text-left py-5  px-5  text-[20.8px]  font-semibold">Click To Know The Legacy Of Our Cars</p>
        <p className="text-left py-2 px-5 text-[15px] text-[#686666]cccc">
          Fuelled by passion, precision, and a legacy of speed, our racing team
          at IIT Bombay has left tire marks...
        </p> 
        <button className="w-40 h-12  mx-5 rounded-lg bg-[#991b1b] hover:bg-red-900 text-lg text-white font-bold my-3">
            Know More
          </button>
        </div>
       
        <div>
            <img className="w-[404px] h-[277px] my-5  relative right-5  rounded-md " src="https://www.iitbracing.org/assets/Blog-post/legacy.jpeg"></img>
        </div>
      </div>
    </div>
  );
};

export default Section6;
