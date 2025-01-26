import { Link, useNavigate } from "react-router-dom";
import { arr } from "../../Constants";
import Like from "../../assets/icons/like.svg";
import Prev from "../../assets/icons/change-logo.svg";
import { useContext } from "react";
import { LikeContext } from "../../context/LikesContext";

export function Products() {
  const { count, setCount } = useContext(LikeContext);

  const handleLike = () => {
    setCount(count + 1);
  };
  const array = arr;
  const navigate = useNavigate();
  return (
    <section id="productssection">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="md:text-4xl text-2xl font-medium">Top tovarlar</p>
          <Link
            to="/category"
            className="decoration-1.5 underline text-blue-900 transition-all hover:text-blue-600"
          >
            Barchasi
          </Link>
        </div>
        <div className="flex justify-center md:justify-between flex-wrap items-center">
          {array.slice(0, 8).map((data) => (
            <div key={data.id}>
              <div className=" bg-gray-300 hover:bg-gray-200 transition-all rounded-md mb-6 cursor-pointer">
                <div className="  flex items-center justify-between mb-8">
                  <p className="bg-white text-sm px-12 py-2 rounded-br-md">
                    {data.text}
                  </p>
                  <button onClick={handleLike}>
                    <img
                      className="mr-3 p-1.5 mt-[-15px] bg-white rounded-md"
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
