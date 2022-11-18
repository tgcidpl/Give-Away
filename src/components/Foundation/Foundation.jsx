import React, { useState } from 'react'
import { DecoratedHeader } from '../DecoratedHeader/DecoratedHeader';
import { LargeBtn } from '../LargeBtn/LargeBtn';
import './Foundation.scss';


export const Foundation = () => {
    const [tab, setTab] = useState(`foundations`)

    const handleClick = (e, name) => {
        setTab(name)
    }

  return (
    <div className='Foundation'>
        <DecoratedHeader text2='Who we help?' />
        <div className='Foundation-selector'>
            <span
            onClick={e => handleClick(e, `foundations`)}
             className='Foundation-selector__button'
             style={tab!==`foundations` ? {borderColor:'transparent'} : {}}>
                Foundations
                </span>
            <span 
            onClick={e => handleClick(e, `organisations`)}
            className='Foundation-selector__button'
            style={tab!==`organisations` ? {borderColor:'transparent'} : {}}>
                Non-Gov Organisations
                </span>
            <span 
            onClick={e => handleClick(e, `collections`)}
            className='Foundation-selector__button'
            style={tab!==`collections` ? {borderColor:'transparent'} : {}}>
                Local Collections
                </span>
        </div>
    </div>
  )
}
