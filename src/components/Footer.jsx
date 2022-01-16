import React from 'react'
import logo from '../assets/CatwikiLogo.svg'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            <img className='footer--image' src={logo} alt="" />
            <p>© created by <strong>JuliXnCXm </strong> - devChallenge.io 2021</p>
        </footer>
    )
}

export default Footer
