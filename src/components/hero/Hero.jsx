import HeroImg from "../../assets/images/hero-img.png";

export function Hero() {
  return (
    <section>
      <div className="container px-4 md:px-8 mx-auto py-20 md:py-40">
        <img src={HeroImg} alt="hero" />
      </div>
    </section>
  );
}
