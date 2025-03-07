import Locat from "../../assets/icons/footer-location.svg";
import Messages from "../../assets/icons/footer-message.svg";
import Tg from "../../assets/icons/footer-tg.svg";
import Insta from "../../assets/icons/footer-insta.svg";
import YouTube from "../../assets/icons/footer-youtube.svg";
import Face from "../../assets/icons/footer-instag.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer data-aos="zoom-in-down" id="footer" className="bg-cyan-700">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-wrap gap-20 items-center">
          <div>
            <p className="max-w-[190px] text-lg text-white mb-5">
              PureClean - Siz va yaqinlaringiz uchun!{" "}
            </p>
            <p className="text-xs text-white ">Aloqa uchun</p>
            <p className="text-base text-white font-semibold mb-5">
              +998 98 998 99 77
            </p>
            <Link to="/about" className="flex gap-2 mb-5">
              <img src={Locat} alt="logo" />
              <p className="text-xs text-white hover:text-slate-200">
                Bizning dokonlar
              </p>
            </Link>
            <Link to="/" className="flex gap-2 mb-5">
              <img src={Messages} alt="logo" />
              <p className="text-xs text-white hover:text-slate-200">
                Info@cleanmarket.uz
              </p>
            </Link>

            <div className="flex gap-3 items-center">
              <Link>
                <img src={Insta} alt="link" />
              </Link>
              <Link>
                <img src={Tg} alt="link" />
              </Link>
              <Link>
                {" "}
                <img src={Face} alt="link" />
              </Link>
              <Link>
                <img src={YouTube} alt="link" />
              </Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-lg text-white mb-8"> Maxsulotlar</p>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-white">Dush va dush sistemalari</li>
              <li className="text-sm text-white">Vanna va keramika</li>
              <li className="text-sm text-white">Smezitel</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg text-white mb-8"> Malumotlar</p>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-white transition-all hover:text-slate-300">
                <Link>Yetkazib berish</Link>
              </li>
              <li className="text-sm text-white transition-all hover:text-slate-300">
                <Link> Bizning maxsulotlar</Link>
              </li>
              <li className="text-sm text-white transition-all hover:text-slate-300">
                <Link to="/about">Biz haqimizda</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
