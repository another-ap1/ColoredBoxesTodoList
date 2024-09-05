import React from "react";

const Box = ({box, handleRemove}) => {
    const remove = () => handleRemove(box.id);
    let boxStyle = {
        backgroundColor:box.color,
        height:`${box.height}px`,
        width:`${box.width}px`,
        border:'solid',
    }
    return(
        <div>
            <div style={boxStyle}></div>
            <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;