import "../../assets/css/list_category.css"

function Lcategory({category, count, filterItems, menuItem}) {
    return(
        <div className="category">
            {category.map((type, index)=>{
                return(
                    <button key={index} className={type===menuItem?"black":null} onClick={()=>{let Etype=escape(type);window.location.replace(`/list/?cate=${Etype}`)}}>{type}({count[index]})</button>
                )
        })}
        </div>
    )
}

export default Lcategory;