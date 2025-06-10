import BannerProdutoDetalhe from "../components/BannerProdutoDetalhe";
import InfoDetalheProduto from "../components/InfoDetalheProduto";
import ProdutoPesquisaDetalhe from "../components/ProdutoPesquisaDetalhe";

const AbaProdutoDetalhe = () => {

    const arrayImgBanner = [
        {
            imagem:"../public/t1.png",
            alt: "Tênis",
            miniImg:[
                "../public/t1.png",
                "../public/t2.png",
                "../public/t3.png",
                "../public/t4.png",
                "../public/t5.png"
            ]
        }
    ]
    
    
    const arrayInfo = [
        {
            titulo:"Tênis Nike Revolution 6 Next Nature Masculino",
            ref: "Casual | Nike | REF:38416711",
            avaliacao:[
                {
                    id: 1,
                    estrela: true
                },
                {
                    id: 2,
                    estrela: true
                },
                {
                    id: 3,
                    estrela: true
                },
                {
                    id: 4,
                    estrela: true
                },
                {
                    id: 5,
                    estrela: false
                },
            ],
            pontuacao: "4.7",
            qntNota: "90 avaliações",
            precoPor:"219,00",
            precoDe:"320,00",
            descricao :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            tamanho:[ "39","40","41","42","43"],
            cor:[ "1","2","3","4","5"],
        }
    ]

         const arrayItemProduto = [
      {
        desconto: '30% OFF',
        imagem: "../public/tenisAlta.png",
        titulo: 'K-Swiss V8 - Masculino',
        tipo:"Tênis",
        precoDe:"$200",
        precoPor:"$100"
      },
      {
        desconto: '30% OFF',
        imagem: "../public/tenisAlta.png",
        titulo: 'K-Swiss V8 - Masculino',
        tipo:"Tênis",
        precoDe:"$200",
        precoPor:"$100"
      },
      {
        desconto: '30% OFF',
        imagem: "../public/tenisAlta.png",
        titulo: 'K-Swiss V8 - Masculino',
        tipo:"Tênis",
        precoDe:"$200",
        precoPor:"$100"
      },
      {
        desconto: '30% OFF',
        imagem: "../public/tenisAlta.png",
        titulo: 'K-Swiss V8 - Masculino',
        tipo:"Tênis",
        precoDe:"$200",
        precoPor:"$100"
      }
    ]

    return ( 
        <div className="w-full">
           <div className="flex bg-amber-100 ">
               <BannerProdutoDetalhe arrayImgBanner={arrayImgBanner} />
               <InfoDetalheProduto 
               titulo={arrayInfo[0].titulo}
               ref={arrayInfo[0].ref}
               avaliacao={arrayInfo[0].avaliacao} pontuacao={arrayInfo[0].pontuacao} 
               qntNota={arrayInfo[0].qntNota}
               precoPor={arrayInfo[0].precoPor}
               precoDe={arrayInfo[0].precoDe}
               descricao={arrayInfo[0].descricao}
               />
           </div>
           <ProdutoPesquisaDetalhe arrayItemProduto={arrayItemProduto}/>
        </div>
     );
}
 
export default AbaProdutoDetalhe;