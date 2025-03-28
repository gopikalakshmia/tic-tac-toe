
import '../Sqaure/square.css';
export default function Square({value,handleClick,won}){
 
    return(
        <button className="squareBox" type="button" onClick={handleClick} disabled={won}>
        {value}
        </button>
    )
}