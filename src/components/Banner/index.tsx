import imgBanner from "../../assets/office.jpeg";
import Bar from "../Bar";

function Banner() {
  return (
    <div className="flex flex-col items-center content-center md:mt-10 md:w-full lg:w-full">
      <div className="flex items-center pb-4">
        <img
          className="rounded-md w-96 md:w-full md:h-96 "
          src={imgBanner}
          loading="lazy" height="300px" width="300px"
          alt="imagem de mesa homeoffice"
        />
      </div>
      <Bar text="Sou dev frontend em Cascavel PR" />
    </div>
  );
}

export default Banner;
