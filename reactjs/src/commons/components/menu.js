const menu=({items})=> {
    return(
        <div>
            {
                items.map((menuItem)=>{
                    const {id, title, desc, img, price}=menuItem;
                    return(
                        <article key={id}>
                            <img src={img}/>
                            <div>
                            <p>{title}</p>
                            <p>{desc}</p>
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