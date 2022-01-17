import "../../assets/css/menu.css"

const menu=({items})=> {
    return(
        <div className="list">
            {
                items.map((menuItem)=>{
                    const {id, title, desc, img, price}=menuItem;
                    return(
                        <article key={id}>
                            <img src={img}/>
                            <div>
                                <p>{title}<br/>{desc}</p>
                                <p>₩{price}</p>
                            </div>
                        </article>
                    )
                })
                
            }
            
        </div>
    )
}

export default menu;