import "../../assets/css/menu_content.css"
import data from "./data/data.js"

const typeArr=[...new Set(data.map((item)=>item.type))];

function MenuContent(){

    return (
    <div className="menu_content">
        <ul>
            <li>샤워
                <ul className="shower">
                    {typeArr.map((type, index) => (
                        <li key={index}>
                            {type}
                        </li>
                    ))}
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