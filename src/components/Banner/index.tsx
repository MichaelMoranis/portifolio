import imgBanner from "../../assets/office.jpeg";
import Bar from "../Bar";

function Banner() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 m-8 mx-10 px-5">
      <div className="w-96 md:w-4/3 p-6">
        <img
          className="rounded-md"
          src={imgBanner}
          alt="imagem de mesa homeoffice"
        />
      </div>
      <Bar text="Sou dev frontend em Cascavel PR" />
    </div>
  );
}

export default Banner;
