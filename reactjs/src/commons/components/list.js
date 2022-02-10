import "../../assets/css/list.css"
import data from "./data/data.js"
import LMenu from './list_menu'
import Lcategory from "./list_category.js";
import { useState, useEffect } from "react"

const speCategories = [...new Set(data.map((item) => item.type))];//...: spread operator
const categories = ["전체", ...speCategories];
const count = [categories.length, ...speCategories.map((item) => data.reduce((cnt, element) => cnt + (item === element.type), 0))];
let listMenu="샤워";

function List() {
    const params=new URLSearchParams(window.location.search);
    let cate=params.get("cate");
    cate=unescape(cate);
    const [menuItem, setMenuItem] = useState(data);

    useEffect(() => {
        listMenu = cate;
        if (cate === null||cate==="전체") {
            listMenu="샤워";
            setMenuItem(data);
        }
        else {
            const newMenuItem = data.filter((item) => item.type === cate);
            setMenuItem(newMenuItem);
        }
    }, []);

    return (
        <div className="list">
            <h1 className="list_type">{listMenu}</h1>
            <Lcategory category={categories} count={count} menuItem={listMenu}/>
            <LMenu items={menuItem}/>
        </div>
    )
}

export default List;