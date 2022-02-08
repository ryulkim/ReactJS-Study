import { Link } from "react-router-dom";
import '../../../assets/css/header.module.css';
import React from "react";

function Header() {
    return (
        <div className="wrap">
            <h1 className="title">
                <Link to="/">LUSH</Link>
            </h1>
            {/*메뉴 바 컴퍼넌트 연동 예정*/}
        </div>

    )
}

export default Header;