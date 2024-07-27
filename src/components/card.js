import React ,{useState} from 'react'
import "./css/card.css"
/* import { FaStar } from "react-icons/fa6";
 */
import { FaRegPlayCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux"
import {addToCart , removeItem} from './Reducer/reducer'





function Card(props) {
    const dispatch = useDispatch()
    const [style, setStyle] = useState("white");

    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "white") {setStyle("white") ;  dispatch(removeItem(props.item.rank))}
        else {setStyle("yellow"); dispatch(addToCart(props.item))};
    };

    return (
        <div key={props.key}className='card'>
<div className='imgcontainer'>
    <img  src={props.image} alt="movie poster" />
    
    <div className="slideup">
    <button className={style} onClick={changeStyle}><FaBookmark /></button>
    <button className='vidbtn' onClick={props.click}><FaRegPlayCircle /></button>
    </div>
</div>
<div className='h2' onClick={props.click}><b>{props.title}</b></div>
</div>

)
}

export default Card


/*  */