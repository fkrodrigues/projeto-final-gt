import FiltrarPor from "../components/FiltrarPor";
import ProdutoPesquisa from "../components/ProdutoPesquisa";


const AbaProdutoPesquisa = () => {

    const arrayFiltros = [
         
            {
               "tituloCategoria":"Marca",
               "array":[
                  {
                     "checked":true,
                     "text":"Adidas"
                  },
                  {
                     "checked":false,
                     "text":"Calenciaga"
                  },
                  {
                     "checked":true,
                     "text":"K-Swiss"
                  },
                  {
                     "checked":false,
                     "text":"Nike"
                  },
                  {
                     "checked":false,
                     "text":"Puma"
                  },
               ]
            },
            {
               "tituloCategoria":"Categoria",
               "array":[
                  {
                     "checked":true,
                     "text":"Esporte e Lazer"
                  },
                  {
                     "checked":false,
                     "text":"Casual"
                  },
                  {
                     "checked":false,
                     "text":"Utilitário"
                  },
                  {
                     "checked":false,
                     "text":"Corrida"
                  }
               ]
            },
            {
               "tituloCategoria":"Gênero",
               "array":[
                  {
                     "checked":true,
                     "text":"Masculino"
                  },
                  {
                     "checked":true,
                     "text":"Feminino"
                  },
                  {
                     "checked":false,
                     "text":"Unissex"
                  }
               ]
            },
            {
               "tituloCategoria":"Estado",
               "array":[
                  {
                     "radio":true,"checked": true,
                     "text":"Novo"
                  },
                  {
                     "radio":true, "checked": false,
                     "text":"Usado"
                  }
               ]
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
        <div className=" 
           flex flex-col items-center 
           xs: 
           h-[2600px]
        ">

          <div className="flex justify-between w-[1300px] my-10">

            <div className="flex ">
               <h4>Resultado para "Tênis"</h4>
               <p>- 389 produtos</p>
            </div>

            <div className="flex gap-1">
               <h4>
                  <label htmlFor="ordenar">
                  Ordenar por: 
                  </label>
               </h4>
               <select id="ordenar">
                 <option value="op1">mais relevantes
                 </option>
                 <option value="op2">maior preço</option>
                 <option value="op3">menor preço</option>
               </select>
            </div>

          </div>

          <div className="flex w-[1300px]
             h-[720px]
          ">
             <div className="
               bg-white
               w-[310px]
               text-[#474747]
               ">
                <h4 className="my-5 ml-5  w-30">Filtrar por</h4>
                <hr className="
                 text-[#CCCCCC] w-[220px]
                  ml-5
                 "/>
                <FiltrarPor arrayFiltros={arrayFiltros}/>
             </div>
             <ProdutoPesquisa arrayItemProduto={arrayItemProduto}/>
          </div>
          
        </div>
     );
}
 
export default AbaProdutoPesquisa;