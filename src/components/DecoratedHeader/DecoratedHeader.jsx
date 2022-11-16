import React from "react";
import './DecoratedHeader.scss';

export function DecoratedHeader ({text1, text2}) {
    return (
    <div className="DecoratedHeader">
        <h2>{text1}</h2>
        <h2 className='DecoratedHeader_bottomText'>{text2}</h2>
    </div>
    )
}