import React from "react";
import './LargeBtn.scss';
import { Link } from "react-router-dom";

export function LargeBtn ({link, text}) {
    return (
        <div className="LargeBtn">
            <Link className='LargeBtn-link' to={link}>{text}</Link>
        </div>
    )
}