
import { Rating, RatingStar } from "flowbite-react";

const NotaAvaliacao = ({estrelas, valorNota,qntNota}) => {
  return (
    <Rating >
      {estrelas.map((item, index) => (
      <RatingStar key={index} filled={item.estrela}/>
      ))}
      <p className="
          flex items-center justify-center
          gap-1 ml-2 text-sm 
          font-extrabold text-white
          dark:text-gray-400
          bg-[#F6AA1C] rounded-[4px]
          p-1 w-[63px] h-[23px] mr-2
          ">
            {valorNota} 
            <RatingStar className="
            text-white
            
            "/>
       </p>

       <p className="text-[#8F8F8F] text-[14px]">  
         ({qntNota})
       </p>
    </Rating>
  );
}
export default NotaAvaliacao;
