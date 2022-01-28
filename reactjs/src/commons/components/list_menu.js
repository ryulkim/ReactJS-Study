import "../../assets/css/list.css"

const menu=({items})=> {
    return(
        <div className="items">
            {
                items.map((menuItem)=>{
                    const {id, title, desc, img, price}=menuItem;
                    return(
                        <article key={id} className="item">
                            <img src={img} alt={title}/>
                            <div>
                                <span className="item_title">{title}</span>
                                <span className="item_desc">{desc}</span>
                                <span className="item_price">₩{price}</span>
                            </div>
                        </article>
                    )
                })  
            }  
        </div>
    )
}

export default menu;