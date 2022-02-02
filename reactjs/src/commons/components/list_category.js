import "../../assets/css/list_category.css"

function Lcategory({category, count, filterItems, menuItem}) {

    return(
        <div className="category">
            {category.map((type, index)=>{
                return(
                    <button key={index} className={type===menuItem?"black":null} onClick={(e)=>{filterItems({type})}}>{type}({count[index]})</button>
                )
        })}
        </div>
    )
}

export default Lcategory;