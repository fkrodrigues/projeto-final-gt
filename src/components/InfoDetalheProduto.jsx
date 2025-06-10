import { Button } from 'primereact/button';
import NotaAvaliacao from './NotaAvaliacao';


const InfoDetalheProduto = ({titulo, ref, avaliacao, pontuacao, qntNota, precoPor, precoDe, descricao, tamanho, cor}) => {

    return ( 
        <div className='w-[440px] h-[570px]     bg-red-200 mt-[83px] ml-10'>
          <h1 className='
            leading-[40px] font-bold
            text-[#1F1F1F] text-[35px]
          '>{titulo}</h1>
          <p className='
             text-[#666666] text-[12px]
          '>{ref}
          </p>
          <NotaAvaliacao
          estrelas={avaliacao}
          valorNota={pontuacao} 
          qntNota={qntNota}
          />
          <div className='
            flex items-baseline-last gap-2 
          '>

            R$<div className='
            flex items-end mb-0
            text-[30px] text-[#474747]
            font-bold
            '>{precoPor}</div>

            <div  className='
            text-[15px] text-[#CCCCCC]
            line-through
            '>R$ {precoDe}</div>

          </div>

          <h4 className='
          text-[#8F8F8F] 
          '>Descrição do produto</h4>
          <div className='
          text-[#474747] 
          '>{descricao}</div>

          <div>{tamanho}</div>
          <div>{cor}</div>
          
          <Button label="Comprar"
              className="
              bg-[#FFB31F] text-white
              p-2.5 rounded-[8px]
              w-[220px] text-[.9rem]
              tracking-widest
              hover:bg-[#ffbe1a]
            "/>
        </div>
     );
}
 
export default InfoDetalheProduto;