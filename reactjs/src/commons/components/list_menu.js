import "../../assets/css/list.css"
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';


const menu=({items})=> {

    return(
        <div className="items">
            {
                items.map((menuItem)=>{
                    const {id, title, desc, img, price, state}=menuItem;

                    const itemState=()=>{
                        
                        return(
                            state.map((item)=><img className="item_state" src={`/img/icon_${item}.png`} alt={item}/>)
                        )
                        
                    }

                    return(
                        <article key={id} className="item">
                            <img src={img} alt={title}/>
                            <div id="enter">
                                <AiOutlineHeart size="25px" color="#989898"/><AiOutlineShoppingCart size="28px" color="#989898"/>
                            </div>
                            <div>
                                <span>{itemState()}</span>
                                <span className="item_title">{title}</span>
                                <span className="item_desc">{desc}</span>
                                <span className="item_price">₩ {price}</span>
                            </div>
                        </article>
                    )
                })  
            }  
        </div>
    )
}

export default menu;