import Checkbox from "./Checkbox";

const FiltrarCategoria = ({arrayCategoria, titulo}) => {
    return ( 
        <>
          <div className="mt-5 ml-5" >
            <h4 className="mb-2">{titulo}</h4>
            {arrayCategoria.map((item, index) => (
                <Checkbox key={index} checked={item.checked} radio={item.radio} text={item.text} onChange={item.onChange}/>
            ))}
          </div>
        </>
     );
}
 
export default FiltrarCategoria;