import MiniImgDetalhe from "./MiniImgDetalhe";

const ImgBannerDetalhe = ({imagem, alt, arrayImgBanner}) => {
  return (
    //DIV PAI
    <div className="
        w-[700px] ml-[100px]
    ">
      <p className="text-[#474747] mt-5 mb-10 text-[15px]"><strong>Home</strong> / Produtos / Tênis /Nike / Tênis Nike Revolution 6 Next Nature Masculino
      </p>

      {/* DIV IMGs */}
      <div className=" 
        bg-amber-100 w-[700px] h-[570px] 
          mb-5 rounded-[6px] relative overflow-hidden
      ">
        {/* IMG GRANDE */}
         <img src={imagem} alt={alt} />

         {/* SETA ESQUERDA */}
       <div className="opacity-80 hover:opacity-50 
        w-[20px] h-[30px]
        absolute left-4 top-[50%]
        -translate-y-[50%]
        ">
            <a href="#">
                <img src="../src/assets/arrow-left.svg" alt="" />
            </a>
      </div>

        {/* SETA DIREITA */}
      <div className="opacity-80 hover:opacity-50 
        w-[20px] h-[30px]
        absolute right-4 top-[50%] 
        -translate-y-[50%]
        ">
            <a href="#">
                <img src="../src/assets/arrow-right.svg" alt="" />
            </a>
         </div>
      </div>

      {/* DIV MINI IMGs */}
      <div className="flex gap-2">
        {arrayImgBanner[0].miniImg.map((miniImagem, index) => (
          <MiniImgDetalhe key={index} alt={alt} imagem={miniImagem} />
        ))}
      </div>
    </div>
  );
};

export default ImgBannerDetalhe;