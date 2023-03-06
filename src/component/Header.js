import React from 'react'
import logo from './logo.jpg'

export default function Header() {
    return (
        <div className='header'>
            <div><img className='logo' src={logo}></img></div>
            <div>News Hub</div>
        </div>
    )
}
