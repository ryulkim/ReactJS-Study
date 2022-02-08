import "../../assets/css/menu_content.css"
import data from "./data/data.js"
import {Link, Routes} from "react-router-dom";

const typeArr=[...new Set(data.map((item)=>item.type))];

function MenuContent(){

    return (
    <div className="menu_content">
        <ul>
            <li><Link to="/list/shower">샤워</Link>
                <ul className="shower">
                    {typeArr.map((type, index) =>{
                        const Etype=escape(type);
                        return (
                            <li key={index}><a onClick={()=>{window.location.replace(`/list/?cate=${Etype}`)}}>{type}</a></li>
                            
                        )})
                    } 
                </ul>
            </li>
            <li>보디
                <ul>
                    <li>클렌저</li>
                    <li>로션</li>
                    <li>핸드 앤 풋</li>
                    <li>마사지 바</li>
                </ul>
            </li>
            <li>페이스
                <ul>
                    <li>페이스 마스크</li>
                    <li>토너</li>
                    <li>프라이머</li>
                    <li>립</li>
                </ul>
            </li>
        </ul>
    </div>
    )
}

export default MenuContent;