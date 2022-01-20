function Lcategory({category, count, filterItems}) {
    return(
        category.map((type, index)=><button key={index} onClick={()=>filterItems({type})}>{type}({count[index]})</button>)
    )
}

export default Lcategory;