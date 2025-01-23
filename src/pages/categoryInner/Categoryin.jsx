import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { arr } from "../../Constants";
import Back from "../../assets/icons/back-logo.svg";
import Prev from "../../assets/icons/change-logo.svg";
import Like from "../../assets/icons/like.svg";

export function Categoryin() {
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  const handleBackCategory = () => {
    navigate("/category");
  };
  const data = arr;
  const params = useParams();
  return (
    <section className="pt-28 md:pt-44">
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-wrap items-center gap-8 mb-8">
          <Link
            to={navigate(-1)}
            className="flex gap-1 items-center decoration-1 underline mb-6"
          >
            <img src={Back} alt="back" /> <p>Ortga</p>
          </Link>
          <div className="flex gap-4">
            <button
              onClick={handleBackHome}
              className="py-1 px-1 sm:px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Home page
            </button>
            <button
              onClick={handleBackCategory}
              className="py-1 px-1 sm:px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Barcha kategoriyalar
            </button>
          </div>
        </div>

        <p className="text-2xl max-w-[467px] font-medium mb-16">
          Профессиональная ковромоечная машина Santoemma Sabrina HOT
        </p>

        {data.map((item) => {
          if (item?.id == params?.dataId) {
            return (
              <div
                className="flex flex-wrap justify-between mb-20"
                key={item?.id}
              >
                <img className="px-12" src={item.img} alt="image" />

                <div>
                  <p className="text-lg font-medium mb-3">
                    Maxsulot xarakteristikasi
                  </p>
                  <p className="text-base font-normal max-w-[450px] text-gray-500">
                    Характеристики: Емкость баков: 14/14 л Вакуумный мотор: 2-х
                    стадийный, 1500 Вт, 3000 мм H2O, 50 л/сек Водяной насос с
                    байпасом: вибрационный, 70 Вт, 4 бар, 1,5 л/мин Ширина
                    уборки: 100 мм Количество форсунок: 1 Нагреватель воды: 180
                    Вт Производительность: 60 м кв./час Длина кабеля: 10 м Длина
                    шланга: 2,5 м Масса нетто/брутто: 12/15 кг Габариты/Габариты
                    упаковки: 30х42х53 / 34х53х70 см Комплект поставки: шланги
                    H10-RAGNO-M + ручная пластмассовая насадка NS10PN-M
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold mb-4 text-cyan-800">
                    {item?.cost}
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
                  <button className="text-base font-medium text-gray-100 transition-all hover:text-gray-300 hover:bg-cyan-600 py-4 px-20 rounded-lg bg-cyan-800">
                    Hoziroq xarid qilish
                  </button>
                </div>
              </div>
            );
          }
        })}

        <p className="text-lg font-medium mb-3">MAXSULOT haqida batafsil</p>
        <p className="max-w-[1090px] text-gray-400 mb-20">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>

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
          {data.slice(0, 3).map((data) => (
            <div key={data.id}>
              <div className=" bg-gray-300 rounded-md mb-6">
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
