import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/images/comp1.png";
import Img2 from "../../assets/images/comp2.png";
import Img3 from "../../assets/images/comp3.png";

export function CompanySect() {
  return (
    <section id="companysection">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
        <p className="text-lg sm:text-2xl font-bold text-cyan-600 mb-8 px-12 md:px-32">
          Bizga ishonch bildirgan kompaniyalar
        </p>
        <div className="flex flex-wrap justify-center gap-2  md:justify-between items-center  ">
          <Link data-aos="flip-left">
            <img
              width="280px"
              height="100px"
              className="py-7 px-8 rounded-xl bg-cyan-800 transition-all hover:bg-cyan-700"
              src={Img1}
              alt="logo"
            />
          </Link>
          <Link data-aos="flip-left">
            <img
              width="280px"
              height="100px"
              className="py-4 px-8 rounded-xl bg-cyan-800 transition-all hover:bg-cyan-700"
              src={Img2}
              alt="logo"
            />
          </Link>
          <Link data-aos="flip-left">
            <img
              width="280px"
              height="100px"
              className="py-1 px-8 rounded-xl bg-cyan-800 transition-all hover:bg-cyan-700"
              src={Img3}
              alt="logo"
            />
          </Link>
          <Link data-aos="flip-left">
            <img
              width="280px"
              height="100px"
              className="py-7 px-8 rounded-xl bg-cyan-800 transition-all hover:bg-cyan-700"
              src={Img1}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
