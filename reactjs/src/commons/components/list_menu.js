import "../../assets/css/list.css"
import Like from "./list_like";
import {AiOutlineShoppingCart } from 'react-icons/ai';
import React, { useState } from "react";
import CartModal from "./modal/list_cartModal";


const Menu=({items})=> {
    const [cart, setCart]=useState(false);
    const [item, setItem]=useState(null);

    const onClick=(item, e)=>{
        setCart(!cart);
        setItem(item);
    }

    

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
                            <article key={id} className="item button">
                                <img src={img} alt={title}/>
                                <div id="enter">
                                    <Like/>
                                    <AiOutlineShoppingCart className="button" size="28px" color="#989898" onClick={(e)=>{onClick(menuItem,e)}}/>
                                </div>
                                <div>
                                    <span>{itemState()}</span>
                                    <span className="item_title">{title}</span>
                                    <span className="item_desc">{desc}</span>
                                    <span className="item_price">₩ {price.toLocaleString()}</span>
                                </div>
                            </article>
                            
                    )
                })  
            }  
            {cart?<CartModal open={cart} close={onClick} item={item}/>:null}
            
        </div>
    )
}

export default Menu;