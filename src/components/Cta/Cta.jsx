import React from "react";
import './Cta.scss';
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader.jsx"
import { LargeBtn } from "../LargeBtn/LargeBtn.jsx"

export function Cta () {
    return (
        <div className='Cta'>
            <DecoratedHeader text1={`Zacznij pomagać!`}
                             text2={`Oddaj niechciane rzeczy w zaufane ręce`}
                              />
            <LargeBtn text={`ODDAJ RZECZY`} link={`/login`} />
            <LargeBtn text={`ZORGANIZUJ ZBIÓRKĘ`} link={`/login`} />
        </div>
    )
}