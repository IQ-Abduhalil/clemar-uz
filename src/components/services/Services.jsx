import ImgSettings from "../../assets/images/middleimg1.png";
import ImgService from "../../assets/images/middleimg2.png";

export function Services() {
  return (
    <section id="servicesection" className="py-20">
      <div>
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-4xl font-bold mb-10">Nega bizni tanlashadi?</p>

          <div className="flex justify-center md:justify-between flex-wrap items-center gap-12">
            <div className="hidden md:block bg-gray-900 rounded-r-2xl max-w-[200px]">
              <img src={ImgSettings} alt="settings" />
            </div>
            <div className="max-w-[800px]">
              <img src={ImgService} alt="service" />
            </div>

            <div className="bg-slate-500 rounded-l-2xl ps-6 pt-7 pb-11">
              <p className="max-w-[300px] text-2xl sm:text-4xl font-normal mb-10">
                Eng to’g’ri tanlov Clean Marketda
              </p>
              <button className="rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all py-2 px-16">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
