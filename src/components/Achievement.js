import React from "react";
import "./Achievement.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Achievement() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="timeline">
      <ul>
        <li>
          <span>2008 : FS Michigan</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/EvoK.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">Best New Entrant</p>
          </div>
        </li>
        <li>
          <span>2008 : FS Michigan</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/evo1.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Best Persevarnce Award
            </p>
          </div>
        </li>
        <li>
          <span>2009 : Bajaj SAE</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/events6.jpeg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Best Engineering Design Award
            </p>
          </div>
        </li>
        <li>
          <span>2011 : Bajaj SAE</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/EVo2.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              RAFTAR Award for lightest and fastest vehicle
            </p>
          </div>
        </li>
        <li>
          <span>2012 : Bajaj SAE</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/evo3.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              5 awards including AQ Peer's choice awards for Best ATV
            </p>
          </div>
        </li>
        <li>
          <span>2014 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/Evo4_iitbracing.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status 07 2015
            </p>
          </div>
        </li>
        <li>
          <span>2015 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/Homepageimage.JPG"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status
            </p>
          </div>
        </li>
        <li>
          <span>2016 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/evox.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status
            </p>
          </div>
        </li>
        <li>
          <span>2018 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/fs_autocross2.JPG"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status
            </p>
          </div>
        </li>
        <li>
          <span>2019 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/EvolV.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status
            </p>
          </div>
        </li>
        <li>
          <span>2020 : FSEV Concept Challlegne</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black" 
              src="https://www.iitbracing.org/assets/Blog-post/Agni11_iitbracing.jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Best EV Design Presentation
            </p>
          </div>
        </li>
        <li>
          <span>2021 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/one%20(3).jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Formula Student awaard based on design improvements and financial
              status
            </p>
          </div>
        </li>
        <li>
          <span>2021 : FS Bharat</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/bbvayu.jpeg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Best Business Presentation
            </p>
          </div>
        </li>
        <li>
          <span>2021 : FSUK</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/assets/Blog-post/Prithvi3_iitbracing%20(1).jpg"
            ></img>
            <p className="text-black text-[30px] font-bold">
              Winners of the overall event
            </p>
          </div>
        </li>
        <li>
          <span>2022 : FSUK Concept class</span>
          <div
            className="content flex gap-20 items-center"
            data-aos="fade-right"
          >
            <img
              className="w-[512px] h-[294px] shadow-2xl border border-black"
              src="https://www.iitbracing.org/fs_autocross2.JPG"
            ></img>
            <p className="text-black text-[30px] font-bold">
              3rd Overall, 2nd in Engineering design, 3rd in Cost and
              Manufacturing, 3rd in real world AI
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Achievement;
