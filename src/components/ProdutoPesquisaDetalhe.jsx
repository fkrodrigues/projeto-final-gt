import ItemProduto from "./ItemProdutoAlta";

const ProdutoPesquisaDetalhe = ({arrayItemProduto}) => {

  
    return ( 

        <div className=" 
          text-[#474747]
          w-[1100px] h-[1080]
          ml-8 mb-8 
        ">
          <div className="flex justify-between items-center  ">
          </div>

          <div className="
          flex justify-between flex-wrap w-[1005px]  
           mb-3 gap-8
          ">
            {arrayItemProduto.map((item, index) => (
                <ItemProduto key={index} desconto={item.desconto} imagem={item.imagem} tipo={item.tipo} titulo={item.titulo} precoDe={item.precoDe} precoPor={item.precoPor}/>
             ))}
          </div>

        </div>
     );
}
 
export default ProdutoPesquisaDetalhe;