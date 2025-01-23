import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Back from "../../assets/icons/back-logo.svg";
import { RightAbout } from "../../components/rightabout/RightAbout";
import Img1 from "../../assets/images/category1.png";
import Img2 from "../../assets/images/category2.png";
import Img3 from "../../assets/images/category3.png";

export function Category() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 py-28 md:py-40">
        <Link
          to={navigate(-1)}
          className="flex gap-1 items-center decoration-1 underline mb-6"
        >
          <img src={Back} alt="back" /> <p>Ortga</p>
        </Link>

        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-10 ">
          <RightAbout />
          <div>
            <p className="text-3xl font-bold mb-10 ml-12">Kategoriyalar</p>
            <ul className="flex flex-wrap justify-between items-center gap-5">
              <li>
                <Link to="/products">
                  {" "}
                  <img src={Img1} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  {" "}
                  <img src={Img2} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <img src={Img3} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <img src={Img2} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <img src={Img3} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <img src={Img1} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  {" "}
                  <img src={Img2} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <img src={Img3} alt="img" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  {" "}
                  <img src={Img1} alt="img" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
