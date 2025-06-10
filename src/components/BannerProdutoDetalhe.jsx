import ImgBannerDetalhe from "./ImgBannerDetalhe";

const BannerProdutoDetalhe = ({arrayImgBanner}) => {
  return (
    <div>
        {arrayImgBanner.map((item, index) => (
                <ImgBannerDetalhe key={index}
                arrayImgBanner={arrayImgBanner} imagem={item.imagem} alt={item.alt}/>
             ))}
             
    </div>

  );
};

export default BannerProdutoDetalhe;
