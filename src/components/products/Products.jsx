import { Link, useNavigate } from "react-router-dom";
import { arr } from "../../Constants";
import Like from "../../assets/icons/like.svg";
import Prev from "../../assets/icons/change-logo.svg";
import { useContext, useState } from "react";
import { LikeContext } from "../../context/LikesContext";
import "animate.css";
import Search from "../../assets/icons/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../../redux/Action/Action";

export function Products() {
  const likes = useSelector((state) => state.likeCard || []);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const array = arr;

  // Filtrlash
  const filteredData = array.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );
  const navigate = useNavigate();
  return (
    <section id="productssection">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="md:text-4xl text-2xl font-medium animate__animated  animate__heartBeat">
            Top tovarlar
          </p>
          <div className="flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="py-2   ps-4 outline-none"
              type="text"
              id="search"
              placeholder="Search"
            />
            <label
              htmlFor="search"
              className="hidden lg:block py-2 px-11 bg-slate-200 rounded-r-md cursor-pointer  transition-all hover:bg-slate-100"
            >
              <img src={Search} alt="search" />
            </label>
          </div>
          <Link
            to="/category"
            className="decoration-1.5 underline text-blue-900 transition-all hover:text-blue-600"
          >
            Barchasi
          </Link>
        </div>
        <div className="flex justify-center md:justify-between flex-wrap items-center">
          {filteredData.slice(0, 8).map((data) => (
            <div key={data.id}>
              <div className=" bg-gray-300 hover:bg-gray-200 transition-all rounded-md mb-6 cursor-pointer">
                <div className="  flex items-center justify-between mb-8">
                  <p className="bg-white text-sm px-12 py-2 rounded-br-md">
                    {data.text}
                  </p>
                  <button onClick={() => dispatch(addLike(data?.id))}>
                    <img
                      className={`mr-3 p-1 mt-[-15px] rounded-md ${
                        likes?.includes(data?.id) ? "bg-red-500" : "bg-white"
                      }`}
                      src={Like}
                      alt="like"
                    />
                  </button>
                </div>
                <img className="px-12" src={data.img} alt="image" />
              </div>
              <p className="text-base text-gray-500 mb-6 max-w-[322px]">
                {data.title}
              </p>
              <p className="text-base font-semibold mb-6">{data.cost}</p>
              <div className="flex items-center justify-between mb-24">
                <button
                  onClick={() => {
                    navigate(`/category/${data.id}`);
                  }}
                  className="px-20 py-4 text-lg font-semibold transition-all bg-slate-300 hover:bg-slate-200 rounded-md"
                >
                  Xarid qilish
                </button>
                <img
                  className="hidden sm:block py-4 px-3 bg-slate-300 hover:bg-slate-200 cursor-pointer rounded-md"
                  src={Prev}
                  alt="prev"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
