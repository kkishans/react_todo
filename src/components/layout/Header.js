import React from 'react';
import {Link } from 'react-router-dom';

function Header(){
    
    return (

        <header style={headerStyle}>

            <h1>Todos List</h1>
            <Link className='link' to='/' >Home </Link> |
            <Link className='link' to='/about' > About</Link>  
        </header>
    )
}
const headerStyle = {
        background: '#333',
        color : '#fff',
        textAlign:'center',
        padding: '10px'
}
export default Header
