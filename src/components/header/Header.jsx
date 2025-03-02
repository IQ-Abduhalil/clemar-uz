import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/Location.svg";
import Telegram from "../../assets/icons/telegram.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Clemar from "../../assets/icons/clemar-logo.svg";
import MenuBtn from "../../assets/icons/menu-logo.svg";
import Like from "../../assets/icons/like.svg";
import { useState } from "react";
import CloseLogo from "../../assets/icons/close.png";
import { useSelector } from "react-redux";
import "../../i18n";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const [query, setQuery] = useState("");

  const likes = useSelector((state) => state.likeCard);

  const [menus, setMenus] = useState(false);

  const handleMenuOpen = () => {
    setMenus(true);
    console.log(menus);
  };
  const handleClose = () => {
    setMenus(false);
  };

  return (
    <header id="header" className="fixed z-50 w-full bg-white">
      <div className="bg-slate-100 py-6">
        <div className="container px-4 md:px-8 mx-auto">
          <div className="header__top flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <span className="flex gap-1 items-center">
                <img src={Logo} alt="location" />{" "}
                <p className="text-sm font-normal text-gray-600">{t("loc")}</p>
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

            <div>
              <button
                onClick={handleMenuOpen}
                className="inline-block md:hidden"
              >
                <img src={MenuBtn} alt="menu" />
              </button>
              <ul
                className={`${
                  menus == true
                    ? "fixed flex-col top-6  bg-gray-100 p-1 rounded-md right-4 md:hidden"
                    : "hidden"
                }`}
              >
                <li onClick={handleClose} className="justify-self-end">
                  <img src={CloseLogo} width="20px" height="20px" alt="close" />
                </li>
                <li onClick={handleClose}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/news">News</Link>
                </li>
                <li onClick={handleClose}>
                  <Link to="/category">Category</Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <Link
                to="https://www.instagram.com"
                className="flex items-center gap-1"
              >
                <img src={Instagram} alt="insta" />
                <p className="text-sm font-normal hover:text-gray-500 transition-all">
                  Cleanmarket_uz
                </p>
              </Link>

              <Link
                to="https://t.me/WD_Abduhalil"
                className="flex items-center gap-1"
              >
                <img src={Telegram} alt="telg" />
                <p className="text-sm font-normal hover:text-gray-500 transition-all">
                  t.me/Clean_market
                </p>
              </Link>

              <address className="text-base hidden lg:inline-block font-semibold text-slate-400">
                <a href="tel:+9987170002">+998 71 700 02</a>
              </address>

              <select
                onChange={changeLanguage}
                value={i18n.language}
                className="text-sm font-normal bg-inherit"
                id=""
              >
                <option className="bg-slate-500" value="en">
                  En
                </option>
                <option value="ru">Ru</option>
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

          <Link to="#" className="flex items-center gap-1">
            <span>{likes?.length}</span>
            <img src={Like} alt="like" />
            <p className="hover:text-slate-500 transition-all">
              {t("sevimli")}
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
