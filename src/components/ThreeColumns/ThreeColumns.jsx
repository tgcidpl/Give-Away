import React from "react";
import './ThreeColumns.scss'

export function ThreeColumns() {
    return (
        <div className='ThreeColumns'>
            <div className='ThreeColumns-column'>
                <h2 className='ThreeColumns-column__number'>10</h2>
                <span className='ThreeColumns-column__title'>BAGS DONATED</span>
                <p className='ThreeColumns-column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='ThreeColumns-column'>
                <h2 className='ThreeColumns-column__number'>5</h2>
                <span className='ThreeColumns-column__title'>ORGANISATIONS SUPPORTED</span>
                <p className='ThreeColumns-column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
            <div className='ThreeColumns-column'>
                <h2 className='ThreeColumns-column__number'>7</h2>
                <span className='ThreeColumns-column__title'>COLLECTIONS ORGANISED</span>
                <p className='ThreeColumns-column__text'>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
    )
}