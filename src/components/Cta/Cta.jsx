import React from "react";
import './Cta.scss';
import {DecoratedHeader} from "../DecoratedHeader/DecoratedHeader.jsx"
import {LargeBtn} from "../LargeBtn/LargeBtn.jsx"

export function Cta() {
    return (
        <div className='Cta'>
            <DecoratedHeader text1={`Start helping!`}
                             text2={`Give away unwanted things with confidence`}
            />
            <div className='Cta-btns'>
                <LargeBtn text={`GIVE AWAY`} link={`/login`}/>
                <LargeBtn text={`ORGANISE COLLECTION`} link={`/login`}/>
            </div>
        </div>
    )
}