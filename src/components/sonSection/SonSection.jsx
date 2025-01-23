import React from "react";
import Img1 from "../../assets/images/son-img1.png";
import Img2 from "../../assets/images/son-img2.png";

export function SonSection() {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 pb-16 md:pb-28">
        <p className="text-4xl font-bold mb-16">Biz sonlarda</p>
        <div className="justify-center flex flex-wrap items-center gap-20 mb-12">
          <img src={Img1} alt="follow" />
          <img src={Img2} alt="follow" />
          <img src={Img1} alt="follow" />
          <img src={Img1} alt="follow" />
        </div>
        <p className="max-w-[1070px] mx-auto text-base font-normal text-teal-600">
          As an effort to keep polishing our services for a more satisfactory
          customer experience, we are very happy to announce the establishment
          of our new SamAutoTrans warehouse! This stands as an embodiment of our
          striving for ever-improving professionalism and quality customer
          service.
        </p>
      </div>
    </section>
  );
}
