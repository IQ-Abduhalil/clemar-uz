import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Back from "../../assets/icons/back-logo.svg";
import Img from "../../assets/images/news-hero.png";

export function News() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };
  const handleBackCategory = () => {
    navigate("/category");
  };
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 pt-28 md:pt-44">
        <div className="flex flex-wrap items-center gap-8 mb-8">
          <Link
            to={navigate(-1)}
            className="flex gap-1 items-center decoration-1 underline mb-6"
          >
            <img src={Back} alt="back" /> <p>Ortga</p>
          </Link>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleBackHome}
              className="py-1 px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Home page
            </button>
            <button
              onClick={handleBackCategory}
              className="py-1 px-3 text-xs bg-gray-300 rounded-md transition-all hover:bg-gray-200"
            >
              Barcha kategoriyalar
            </button>
          </div>
        </div>
        <p className="text-xl md:text-3xl font-semibold mb-8">
          Yangilik nomi zagolovka
        </p>
        <img className="mb-8" src={Img} alt="img" />
        <p className="text-lg mb-3 font-normal text-gray-600">
          Yangilik chiqgan vaqti:
        </p>
        <p className="text-lg font-medium mb-8">08.04.2033</p>
        <p className="text-lg font-normal text-gray-600 mb-28">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
    </div>
  );
}
