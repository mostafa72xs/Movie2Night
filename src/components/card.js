import React ,{useState} from 'react'
import "./css/card.css"
/* import { FaStar } from "react-icons/fa6";
 */
import { FaRegPlayCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux"
import {addToCart , removeItem} from './Reducer/reducer'
import { usePopup } from './Context/PopUpcontext';





function Card(props) {

    const [ pop , setPop] = usePopup()
    const dispatch = useDispatch()
    const [style, setStyle] = useState("white");
    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "white") {setStyle("white") ;  dispatch(removeItem(props.item.id))}
        else {setStyle("yellow"); dispatch(addToCart(props.item))};
    };
    return (
        <div key={props.item.id} className='carding'>
<div className='mmmi'>
    <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt="movie poster" />
    <div className="slideup">
    <button className={style} onClick={changeStyle}><FaBookmark /></button>
    <a href='/Moviedetails'><button className='vidbtn' onClick={() => setPop(props.item)}><FaRegPlayCircle /></button></a>
    </div>
</div>
<a href='/Moviedetails' style={{textDecoration:'none'}}>
<div className='hee' onClick={() => setPop(props.item)}><b>{props.title}</b></div>
</a>
</div>

)
}

export default Card

