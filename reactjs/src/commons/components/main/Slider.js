import React, { useState } from "react";
import "./Slider.css";
import DataSlider from './DataSlider';

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);

    const moveDot = index => {
        setSlideIndex(index);
    }

    return (
        <div className="slider">
            {DataSlider.map((obj, index) => {
                return (
                    <div key={obj.id}
                        className={slideIndex === index + 1 ? 'active-animation' : 'slide'}
                    >
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        />
                    </div>
                )
            })}

            <div className="dots">
                {Array.from({ length: 4 }).map((item, index) => (
                    <div onClick={() => {
                        moveDot(index + 1)
                    }}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}>

                    </div>
                ))}
            </div>
        </div>
    );
}
// ㅇㅇㅇㅇㅇ
export default Slider;