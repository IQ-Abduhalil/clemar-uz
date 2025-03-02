import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { arr } from "../../Constants";
import Back from "../../assets/icons/back-logo.svg";
import Prev from "../../assets/icons/change-logo.svg";
import Like from "../../assets/icons/like.svg";
import { useDispatch, useSelector } from "react-redux";
import { addLike, closeModal, openModal } from "../../redux/Action/Action";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export function Categoryin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const likes = useSelector((state) => state.likeCard || []);
  const open = useSelector((state) => state.open);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataId } = useParams();

  const onSubmit = (inputs) => {
    reset();
    dispatch(closeModal());
    toast.success("Malumotlar yuborildi!");
    console.log(inputs);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = arr.find((item) => item.id == dataId);

  return (
    <section id="product" className="pt-28 md:pt-44">
      <div className="container mx-auto px-4 md:px-8 pb-20">
        {/* modalka */}

        {open ? (
          <div className="fixed top-36 left-80 right-80 ">
            {/* <form className="flex flex-col gap-4 items-center px-32 py-4 bg-slate-100 rounded-lg">
              <button
                onClick={() => dispatch(closeModal())}
                className="ml-auto mr-0 py-1 px-2 rounded-sm bg-slate-300"
              >
                x
              </button>
              <input
                className="px-3 py-2  rounded-md border-1 "
                type="text"
                placeholder="number"
                required
              />
              <input
                className="px-3 py-2  rounded-md border-1 "
                type="password"
                placeholder="password"
                required
              />
              <button
                onClick={() => dispatch(closeModal())}
                className="px-3 py-2 rounded-md border-1 bg-blue-800 text-white text-sm"
              >
                Submit
              </button>
            </form> */}

            <form
              className="flex flex-col gap-4 items-center  px-8 py-16 bg-slate-100 rounded-lg"
              onSubmit={handleSubmit(onSubmit)}
            >
              <button
                onClick={() => dispatch(closeModal())}
                className="ml-auto mr-0 py-1 px-2 rounded-sm bg-slate-300"
              >
                x
              </button>
              <input
                className="px-16 py-3 rounded-md bg-slate-300"
                {...register("name")}
                placeholder="Ismingizni kiriting!"
              />

              <input
                className="px-16 py-3 rounded-md bg-slate-300"
                type="tel"
                {...register("phone", { required: true })}
                placeholder="+998 90 051 31 01"
              />
              {errors && (
                <span className="text-red-700 font-semibold">
                  Iltimos ma'lumot kiriting!!!
                </span>
              )}

              <button
                className="cursor-pointer bg-sky-600 text-white px-8 py-2 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          ""
        )}

        {/* Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-8 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-1 items-center decoration-1 underline mb-6"
          >
            <img src={Back} alt="back" /> <p>Ortga</p>
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/")}
              className="py-1 px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Home page
            </button>
            <button
              onClick={() => navigate("/category")}
              className="py-1 px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Barcha kategoriyalar
            </button>
          </div>
        </div>

        {/* Product Details */}
        {product ? (
          <>
            <p className="text-2xl max-w-[467px] font-medium mb-16">
              {product.title}
            </p>
            <div className="flex flex-wrap justify-between mb-20">
              <img className="px-12" src={product.img} alt={product.title} />
              <div>
                <p className="text-lg font-medium mb-3">
                  Maxsulot xarakteristikasi
                </p>
                <p className="text-base font-normal max-w-[450px] text-gray-500">
                  {product.description}
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold mb-4 text-cyan-800">
                  {product.cost}
                </p>
                <ul className="flex flex-col gap-4 mb-12">
                  <li className="text-base font-normal text-gray-600">
                    <Link to="#">O'rnatib berish</Link>
                  </li>
                  <li className="text-base font-normal text-gray-600">
                    <Link to="#">Yetkazib berish</Link>
                  </li>
                  <li className="text-base font-normal text-gray-600">
                    <Link to="#">Service xizmati</Link>
                  </li>
                </ul>
                <button
                  onClick={() => dispatch(openModal())}
                  className="text-base font-medium text-gray-100 transition-all hover:text-gray-300 hover:bg-cyan-600 py-4 px-20 rounded-lg bg-cyan-800"
                >
                  Hoziroq xarid qilish
                </button>
              </div>
            </div>
          </>
        ) : (
          <p className="text-red-500 text-lg">Mahsulot topilmadi!</p>
        )}

        {/* Top Products */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl md:text-4xl font-medium">Top tovarlar</p>
          <Link
            to="/category"
            className="decoration-1.5 underline text-blue-800"
          >
            Barchasi
          </Link>
        </div>
        <div className="flex justify-center sm:justify-between flex-wrap items-center">
          {arr.slice(0, 3).map((item) => (
            <div key={item.id}>
              <div className="bg-gray-300 rounded-md mb-6 p-4">
                <div className="flex items-center justify-between mb-8">
                  <p className="bg-white text-sm px-12 py-2 rounded-br-md">
                    {item.text}
                  </p>
                  <button onClick={() => dispatch(addLike(item?.id))}>
                    <img
                      className={`mr-3 p-1 mt-[-15px] rounded-md ${
                        likes?.includes(item?.id) ? "bg-red-500" : "bg-white"
                      }`}
                      src={Like}
                      alt="like"
                    />
                  </button>
                </div>
                <img className="px-12" src={item.img} alt={item.title} />
              </div>
              <p className="text-base text-gray-500 mb-6 max-w-[322px]">
                {item.title}
              </p>
              <p className="text-base font-semibold mb-6">{item.cost}</p>
              <div className="flex items-center justify-between mb-24">
                <button className="px-20 py-4 text-xs md:text-lg font-semibold bg-slate-100 transition-all hover:bg-slate-300 rounded-md">
                  Hoziroq Xarid qilish
                </button>
                <img
                  className="py-4 px-3 hidden sm:block bg-slate-100 transition-all hover:bg-slate-300 rounded-md"
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
