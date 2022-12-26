import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header--inside'>
                <ul>
                    <li>
                        <NavLink to={"/"}>Star Wars</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/favorites"}>Favorites</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header