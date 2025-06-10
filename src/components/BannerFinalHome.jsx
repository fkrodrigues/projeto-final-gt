import { Button } from "primereact/button";

const BannerFinalHome = ({imagem, titulo, descricao, funcaoBtn}) => {
    return ( 
      <div className=" bg-white 
          flex justify-center items-center
          gap-15
          h-[553px]
         ">

          <div className="
            w-[575px] h-[330px]
          ">
            <img src={imagem} alt=""></img>
          </div>

          <div className="flex flex-col 
            w-[590px] h-[330px]
          ">
              <div className="
                text-[#C92071] text-[14px]
                font-bold mb-6
              ">Oferta Especial
              </div>

              <div className="
                text-[#474747] text-[48px]
                font-bold leading-12 mb-7
              ">{titulo}</div>
             
              <div className="
                mb-6 text-[#474747] tracking-widest
              ">{descricao}</div>
               <Button onClick={funcaoBtn} label="Ver Ofertas"
                    className="
                    bg-[#c92071] text-white
                    p-2.5 rounded-[8px]
                    w-[210px] text-[.9rem]
                    tracking-[1px]
                    hover:bg-[#db2777]
                "/>
            </div>

        </div>
     );
}
 
export default BannerFinalHome;