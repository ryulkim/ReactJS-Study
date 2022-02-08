import data from "./data/data.js"
import LMenu from './list_menu'
import Lcategory from "./list_category.js";
import { useState } from "react"

const speCategories = [...new Set(data.map((item) => item.type))];//...: spread operator
const categories = ["전체", ...speCategories];
const count = [categories.length, ...speCategories.map((item) => data.reduce((cnt, element) => cnt + (item === element.type), 0))];
let listMenu = "전체";

function List() {
    const [menuItem, setMenuItem] = useState(data);

    const filterItems = ({ type }) => {//{}를 하려면 파라미터와 인자명이 같아야함,{}를 안하면 query 형식으로 저장
        listMenu = type;
        if (type === "전체") {
            setMenuItem(data);
        }
        else {
            const newMenuItem = data.filter((item) => item.type === type);
            setMenuItem(newMenuItem);
        }
    }

    return (
        <div className="list">
            <h1 className="list_type">{listMenu}</h1>
            <Lcategory category={categories} count={count} filterItems={filterItems} menuItem={listMenu}/>
            <LMenu items={menuItem}/>
        </div>
    )
}

export default List;