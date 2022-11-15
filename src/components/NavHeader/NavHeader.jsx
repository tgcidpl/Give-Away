import React from "react";
import './NavHeader.scss';
import { Menu } from '../Menu/Menu.jsx';
import { Cta } from '../Cta/Cta.jsx';

export function NavHeader () {
    return (
        <div className='NavHeader'>
            <div className='NavHeader-banner'>
            </div>
            <div className='NavHeader-header'>
                <Menu />
                <Cta />
            </div>
        </div>
    )
}