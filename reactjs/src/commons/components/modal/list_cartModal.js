import "../../../assets/css/list_cartModal.css";
import {AiOutlineClose } from 'react-icons/ai';
import {useState} from "react";


const CartModal=({open, close, item})=>{
    const {title, desc, img, price}=item;
    const [ord, setOrd]=useState({pri:price,val:1});

    const plus=()=>{
        setOrd({pri:price*(ord.val+1),val:ord.val+1});
    }
    const minus=()=>{
        setOrd({pri:price*(ord.val-1),val:ord.val-1});
    }

    return(
        <div className={open?'openModal':''}>
        {
            open?
            <section>
                <header>
                    장바구니 담기
                    <AiOutlineClose className="button" size="30px" color="gray" onClick={close}/>
                </header>
                <main>
                    <img className="cart_img" src={img} alt={title}/>
                    <div className="item">
                        <div className="cart_cnt">
                            {title}
                            <desc>{desc}</desc>
                        </div>
                        <div className="order">
                            <div className="cnt">
                                <button onClick={minus}>-</button>
                                <input id="value" value={ord.val}></input>
                                <button onClick={plus}>+</button>
                            </div>
                            <pri>₩{ord.pri.toLocaleString()}</pri>
                        </div>
                    </div>
                </main>
                <footer>
                    <button className="cancel" onClick={close}>취소하기</button>
                    <button className="cart">담기</button>
                </footer>
            </section>:null
        }
        </div>
    )
    
}

export default CartModal;