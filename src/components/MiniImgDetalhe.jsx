const MiniImgDetalhe = ({imagem, alt}) => {
    return ( 
        <>
            <div className=" w-[700px] flex      
           justify-between">

        <div className=" bg-amber-500 w-[115px] 
             h-[92px] overflow-hidden 
             rounded-[6px] hover:border-[#c92071]
             hover:border-3 hover:cursor-pointer
             ">
          <img src={imagem} alt={alt} />
        </div>
      </div>
        </>
     );
}
 
export default MiniImgDetalhe;