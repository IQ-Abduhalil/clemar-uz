import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/Location.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Clemar from "../../assets/icons/clemar-logo.svg";
import MenuBtn from "../../assets/icons/menu-logo.svg";
import Like from "../../assets/icons/like.svg";
import Search from "../../assets/icons/Search.svg";

export function Header() {
  const navigate = useNavigate();
  const onNavigate = (e) => {
    e.target.value === "home" ? navigate("/") : navigate("/category");
  };
  return (
    <header className="fixed w-full bg-white">
      <div className="bg-slate-100 py-6">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="header__top flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <span className="flex gap-1 items-center">
                <img src={Logo} alt="location" />{" "}
                <p className="text-sm font-normal text-gray-600">Lokatsiya:</p>
              </span>
              <select className="bg-inherit">
                <option value="toshkent" className="text-sm font-medium">
                  Toshkent
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Sirdaryo
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Jizzax
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Navoiy
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Qashqadaryo
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Surxondaryo
                </option>
                <option value="toshkent" className="text-sm font-medium">
                  Xorazm
                </option>
              </select>
            </div>

            <button className="inline-block md:hidden">
              <img src={MenuBtn} alt="menu" />
            </button>

            <div className="hidden md:flex items-center gap-10">
              <Link to="#" className="flex items-center gap-1">
                <img src={Instagram} alt="insta" />
                <p className="text-sm font-normal hover:text-gray-500 transition-all">
                  Cleanmarket_uz
                </p>
              </Link>

              <Link to="#" className="flex items-center gap-1">
                <img src={Telegram} alt="telg" />
                <p className="text-sm font-normal hover:text-gray-500 transition-all">
                  t.me/Clean_market
                </p>
              </Link>

              <p className="text-base hidden lg:inline-block font-semibold text-slate-400">
                +998 71 700 02
              </p>

              <select className="text-sm font-normal bg-inherit" id="">
                <option className="bg-slate-500" value="ru">
                  Ru
                </option>
                <option value="uz">Uz</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container hidden md:block px-4 md:px-8 mx-auto pb-5 ">
        <div className="header__bottom flex items-center justify-between py-3">
          <Link to="/">
            <img src={Clemar} alt="clemar" />
          </Link>
          <div className="flex items-center gap-2">
            <img src={MenuBtn} alt="menu" />
            <select className="hover:text-gray-500 cursor-pointer">
              <option value="1">Поломоичные Машины </option>
              <option value="2">Уборный инвентар</option>
              <option value="3">Профессионалные </option>
              <option value="4">Моющыесредства</option>
              <option value="5">Поломоичные Машины</option>
              <option value="6">УПрофессионал</option>
              <option value="7">УМоющыесредства</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              className="py-2   ps-4 outline-none"
              type="text"
              id="search"
              placeholder="Qidiruv"
            />
            <label
              htmlFor="search"
              className="hidden lg:block py-2 px-11 bg-slate-200 rounded-r-md cursor-pointer  transition-all hover:bg-slate-100"
            >
              <img src={Search} alt="search" />
            </label>
          </div>

          <Link to="/category" className="flex items-center gap-1">
            <img src={Like} alt="like" />
            <p className="hover:text-slate-500 transition-all">Sevimlilar</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
