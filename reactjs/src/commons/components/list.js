import data from "./data/data.js"
import LMenu from './list_menu'
import Lcategory from "./list_category.js";
import {useState} from "react"

const speCategories=[...new Set(data.map((item)=>item.type))];//...: spread operator
const categories=["all",...speCategories];
const count=[categories.length,...speCategories.map((item)=>data.reduce((cnt,element)=>cnt+(item===element.type),0))];

function List() {
    const [menuItem, setMenuItem]=useState(data);

    const filterItems=({type})=>{//{}를 하려면 파라미터와 인자명이 같아야함,{}를 안하면 query 형식으로 저장
        if(type==="all"){  
            setMenuItem(data);
        }
        else{
            const newMenuItem=data.filter((item)=>item.type===type);
            setMenuItem(newMenuItem);
        }
    }

    return(
        <>
            <h1>list</h1>
            <Lcategory category={categories} count={count} filterItems={filterItems}/>
            <LMenu items={menuItem}/>
        </>
    )
}

export default List;