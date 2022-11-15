import React from "react";
import './Cta.scss';
import { DecoratedHeader } from "../DecoratedHeader/DecoratedHeader.jsx"

export function Cta () {
    return (
        <div className='Cta'>
            <DecoratedHeader text={`Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce`} />
        </div>
    )
}