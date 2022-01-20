function Lcategory({category, filterItems}) {
    return(
        <>
        {category.map((type, index)=><button key={index} onClick={()=>filterItems({type})}>{type}</button>)}
        </>
        
    )
}

export default Lcategory;