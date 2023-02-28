import React from 'react'
import CartWidget from '../Cartwidget'; 

export const NavBar = () => {
return (
   <div className='container'>
    <nav className='nav'>
        <div className='nav_brand'>
            <a className= "nav_link" href="#">mi marca</a>
        </div>
        <ul className='nav_list'>
            <li>
                <a className= "nav_link" href="#">categoria 1</a>
            </li>
            <li>
                <a className= "nav_link" href="#">categoria 1</a>
            </li>
            <li>
                <a className= "nav_link" href="#">
                    <CartWidget />
                </a>
            </li>
        </ul>
    </nav>
   </div>
   
);
}

export default NavBar;
