import AboutImg from "../../assets/images/about-img.png";
import Tg from "../../assets/icons/telegram.svg";
import Insta from "../../assets/icons/instagram.svg";

export function About() {
  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-44">
        <div className="flex flex-wrap items-center gap-20 py-14 px-12">
          <div>
            <p className="text-3xl mb-6 font-semibold">Biz haqimizda</p>
            <p className="text-sm max-w-[507px] mb-12">
              Вас приветствует магазин электроники MacBro. У нас вы можете найти
              всю продукцию Apple. Уже более 14 лет мы консультируем и подбираем
              нужный гаджет для наших покупателей. За время нашего существования
              на рынке мы успели оптимизировать доставку по межгороду, так что
              вы получите гаджет в течении трех дней, а если вам необходима
              доставка по городу мы доставим гаджет в течении 2 часов. 90% наших
              клиентов становятся постоянными покупателями, потому что мы даем
              гарантию на один год.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button className="py-3 px-6 md:px-10 text-xs lg:text-base transition-all hover:bg-neutral-600 bg-neutral-800 rounded-md text-white">
                Aloqaga chiqish
              </button>
              <button className="py-3 px-6 md:px-10 text-xs lg:text-base transition-all hover:bg-gray-200 bg-gray-300 rounded-md">
                Bizning manzil
              </button>
              <button className="p-3 bg-gray-200 transition-all hover:bg-gray-100 rounded-lg">
                <img src={Tg} alt="logo" />
              </button>
              <button className="p-3 bg-gray-200 transition-all hover:bg-gray-100 rounded-lg">
                <img src={Insta} alt="logo" />
              </button>
            </div>
          </div>

          <img src={AboutImg} alt="image" />
        </div>
      </div>
    </div>
  );
}
