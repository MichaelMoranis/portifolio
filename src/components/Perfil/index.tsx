import perfil from "../../assets/perfil.jpeg"

function Perfil() {
    return (
       <div className="flex flex-col md:flex-row items-center m-auto justify-between w-full  sm:w-2/3 md:w-4/3 lg:w-3/5 lg:justify-around gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-3xl">
                Michael Moranis
            </h2>
            <h2 className="font-bold">
             (web/design/fotos/imagens)
            </h2>
          </div>
          <div className="rounded-full flex items-center justify-center p-4">
            <img src={perfil} alt="imagem de perfil " className="rounded-full h-32"/>
          </div>
       </div>
    )
}

export default Perfil