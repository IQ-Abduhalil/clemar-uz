import React from "react";
import { Link } from "react-router-dom";
import ViewLogo from "../../assets/icons/eyes.svg";
import CalendarLogo from "../../assets/icons/calendar-logo.svg";
import Img1 from "../../assets/images/newsect1.png";
import Img2 from "../../assets/images/newsect2.png";
import Img3 from "../../assets/images/newsect3.png";
import Img4 from "../../assets/images/newsect4.png";
import Img5 from "../../assets/images/newsect5.png";

export function NewsSection() {
  return (
    <section id="newssection">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl md:text-4xl font-bold">
            Clean market yangiliklari
          </p>
          <Link
            to="/news"
            className="text-cyan-600 transition-all hover:text-cyan-500 text-base underline decoration-1"
          >
            Barcha yangiliklar
          </Link>
        </div>

        <div>
          <div className="flex flex-wrap justify-between items-center gap-8 mb-5">
            <img src={Img1} alt="img" />
            <div>
              <div className="flex flex-wrap items-center gap-8 mb-6">
                <button className="text-base text-center text-teal-600 transition-all hover:text-teal-400 font-medium py-1 px-6 rounded-lg bg-slate-200">
                  Actual new
                </button>
                <span className="flex items-center gap-4">
                  <img src={ViewLogo} alt="view" />
                  <p className="text-base text-teal-600 font-medium">
                    16.5k views
                  </p>
                </span>
                <span className="flex items-center gap-4">
                  <img src={CalendarLogo} alt="calendar" />
                  <p className="text-base text-teal-600 font-medium">
                    05.12.2004
                  </p>
                </span>
              </div>

              <p className="font-semibold text-lg mb-3">Latest news</p>
              <p className="text-base text-slate-400 font-normal mb-7 max-w-[880px]">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we are very happy to announce
                the establishment of our new SamAutoTrans warehouse! This stands
                as an embodiment of our striving for ever-improving
                professionalism and quality customer service.As an effort to
                keep polishing our services for a more satisfactory customer
                experience, we are very happy
              </p>

              <Link
                to="/news"
                className="text-cyan-600 transition-all hover:text-cyan-500 text-base underline decoration-1"
              >
                read more
              </Link>
            </div>
          </div>
          <div className="cards flex flex-wrap justify-center md:justify-between">
            <div className="p-3">
              <img className="mb-6" src={Img2} alt="img" />
              <p className="mb-6 text-lg max-w-[322px] font-semibold">
                What should be the arrangement of furniture in the bathroom?
              </p>
              <p className="max-w-[322px] font-normal text-sm text-slate-400 mb-6">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <Link
                to="/news"
                className="text-cyan-600 transition-all hover:text-cyan-500 text-base font-semibold underline decoration-1"
              >
                Read more
              </Link>
            </div>
            <div className="p-3">
              <img className="mb-6" src={Img3} alt="img" />
              <p className="mb-6 text-lg max-w-[322px] font-semibold">
                What should be the arrangement of furniture in the bathroom?
              </p>
              <p className="max-w-[322px] font-normal text-sm text-slate-400 mb-6">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <Link
                to="/news"
                className="text-cyan-600 transition-all hover:text-cyan-500 text-base font-semibold underline decoration-1"
              >
                Read more
              </Link>
            </div>
            <div className="p-3">
              <img className="mb-6" src={Img4} alt="img" />
              <p className="mb-6 text-lg max-w-[322px] font-semibold">
                What should be the arrangement of furniture in the bathroom?
              </p>
              <p className="max-w-[322px] font-normal text-sm text-slate-400 mb-6">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <Link
                to="/news"
                className="text-cyan-600 transition-all hover:text-cyan-500 text-base font-semibold underline decoration-1"
              >
                Read more
              </Link>
            </div>
            <div className="p-3">
              <img className="mb-6" src={Img5} alt="img" />
              <p className="mb-6 text-lg max-w-[322px] font-semibold">
                What should be the arrangement of furniture in the bathroom?
              </p>
              <p className="max-w-[322px] font-normal text-sm text-slate-400 mb-6">
                As an effort to keep polishing our services for a more
                satisfactory customer experience, we{" "}
              </p>
              <Link
                to="/news"
                className="text-cyan-600 transition-all hover:text-cyan-500 text-base font-semibold underline decoration-1"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
