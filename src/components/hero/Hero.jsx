import HeroImg from "../../assets/images/hero-img.png";
import "swiper/css";

export function Hero() {
  return (
    <section id="hero">
      <div className="container px-4 md:px-8 mx-auto py-20 md:py-40 ">
        <img src={HeroImg} alt="Image" />
      </div>
    </section>
  );
}
