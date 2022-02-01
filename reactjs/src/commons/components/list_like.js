import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import React, { useState } from "react";

const Like=()=>{
    const [like, setLike]=useState(false);

    const onClick=()=>{
        setLike(!like);
    }

    return(
        <>
            {like?<AiFillHeart size="25px" color="red" onClick={onClick}/>:<AiOutlineHeart size="25px" color="#989898" onClick={onClick}/>}
        </>
    )

}

export default Like;