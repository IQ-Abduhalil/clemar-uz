import React from "react";
import InstaLogo from "../../assets/icons/instagr.svg";
import FaceLogo from "../../assets/icons/facebook.svg";
import TwetLogo from "../../assets/icons/tweeter.svg";
import { Link } from "react-router-dom";

export function ConnectSect() {
  return (
    <section id="connect">
      <div className="container mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center pb-28 md:pb-44">
        <div className="mb-8 lg:mb-0">
          <p className="text-2xl font-bold mb-4">Biz bilan aloqa</p>
          <p className="max-w-[378px] text-base text-zinc-600 mb-20">
            Бизга алокага чикинг операторларимиз 24 соат ичида алокага чикади
            точно тел килишади ховотир омен
          </p>
          <div className="flex flex-wrap items-center gap-9">
            <button className="py-3 px-6 bg-teal-700 transition-all hover:bg-teal-600 rounded-xl text-white">
              +998 99 011 89 34
            </button>
            <div className="flex gap-4">
              <Link>
                <img src={FaceLogo} alt="logo" />
              </Link>
              <Link>
                <img src={TwetLogo} alt="logo" />
              </Link>
              <Link>
                <img src={InstaLogo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="pt-6 pr-24 sm:pr-80 ps-6 pb-7 bg-slate-200 rounded-md"
            placeholder="Name"
          />
          <input
            type="number"
            className="pt-6 pr-24 sm:pr-80 ps-6 pb-7 bg-slate-200 rounded-md"
            placeholder="Phone number"
          />
          <input
            type="text"
            className="pt-6 pr-24 sm:pr-80 ps-6 pb-7 bg-slate-200 rounded-md"
            placeholder="Habaringizni qoldiring"
          />
          <button className="px-20 sm:px-40 py-5 text-xs sm:text-lg font-bold text-white bg-cyan-700 transition-all hover:bg-cyan-600 rounded-md">
            Send all information
          </button>
        </form>
      </div>
    </section>
  );
}
