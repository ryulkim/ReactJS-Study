import "../../assets/css/list_category.css"

function Lcategory({ category, count, filterItems }) {
    return (
        <div className="category">
            {category.map((type, index) => <button key={index} onClick={() => filterItems({ type })}>{type}({count[index]})</button>)}
        </div>
    )
}

export default Lcategory;