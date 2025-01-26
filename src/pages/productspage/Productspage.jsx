import { Link, useNavigate } from "react-router-dom";
import { arr } from "../../Constants";
import Like from "../../assets/icons/like.svg";
import Prev from "../../assets/icons/change-logo.svg";
import { RightAbout } from "../../components/rightabout/RightAbout";
import Back from "../../assets/icons/back-logo.svg";

export function ProductsPage() {
  const navigate = useNavigate();
  const array = arr;
  return (
    <section id="productspage">
      <div className="container mx-auto px-4 md:px-8 pt-28 md:pt-44">
        <Link
          to={navigate(-1)}
          className="flex gap-1 items-center decoration-1 underline mb-6"
        >
          <img src={Back} alt="back" /> <p>Ortga</p>
        </Link>
        <div className="flex flex-wrap justify-center sm:flex-nowrap sm:gap-32">
          <RightAbout />
          <div className="flex justify-center sm:justify-between flex-wrap items-center pt-32">
            {array.map((data) => (
              <div key={data.id}>
                <div className=" bg-gray-300 rounded-md mb-6 cursor-pointer hover:bg-gray-200">
                  <div className="  flex items-center justify-between mb-8">
                    <p className="bg-white text-sm px-12 py-2 rounded-br-md">
                      {data.text}
                    </p>
                    <Link>
                      <img
                        className="mr-3 p-1.5 bg-white rounded-md"
                        src={Like}
                        alt="like"
                      />
                    </Link>
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
                    className="px-20 py-4 text-lg font-semibold bg-slate-100 transition-all hover:bg-slate-200 rounded-md"
                  >
                    Xarid qilish
                  </button>
                  <img
                    className="py-4 px-3 hidden md:block bg-slate-100 transition-all hover:bg-slate-200 rounded-md"
                    src={Prev}
                    alt="prev"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
