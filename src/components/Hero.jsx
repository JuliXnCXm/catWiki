import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroImage from '../assets/HeroImagelg.png'
import logo from '../assets/CatwikiLogo.svg'
import '../styles/Hero.css'
import ModalSearcher from './ModalSearcher';
import useHero from '../hooks/useHero';
import { useNavigate } from "react-router-dom"

const Hero = () => {

    const { filteredCats, setQuery, mobile } = useHero()
    const [ show, setShow ] = useState(false)
    const navigate = useNavigate()


    const handleShow = ( e ) => {
        e.preventDefault()
        setShow( true )
    }

    const handleClick = ( e, cat ) => {
        e.preventDefault()
        navigate( `/${ cat }` )
    }

    const handleClose = () => {
        setShow( false )
    }

    return (
        <div className='heroContainer'>
            <img className='headerLogo' src={logo} alt="" />
            <div className='hero'>
                <img className='hero--image' src={HeroImage} alt="" />
                <div className='heroContainer--form'>
                    <img className='heroImageLogo' src={logo} alt="" />
                    <h2>Get to know more about your cat breed</h2>
                    <div>
                        {mobile ?
                            <div>
                                <div className='heroContainer--form__input'>
                                    <i className="material-icons heroContainer--form__icon">search</i>
                                    <input type="button" onClick={handleShow} value="Search" name="catname" id="myDropdown" onChange={( e ) =>
                                    {
                                        setQuery( e.target.value )
                                    }} />
                                </div>
                                <ModalSearcher show={show} handleClose={handleClose}/>
                            </div>
                            :
                            <div>
                                <div className='heroContainer--form__input'>
                                    <i className="material-icons heroContainer--form__icon">search</i>
                                    <input type="search" name="catname" id="myDropdown" placeholder='Enter your breed' onChange={( e ) =>
                                    {
                                        setQuery( e.target.value )
                                    }} />
                                    <div id="dropdown-content" class="dropdown-content">
                                        {filteredCats.map( ( cat, idx ) =>
                                        {
                                            return (
                                                <li key={idx}>
                                                    <span className='catname' onClick={( e ) =>
                                                    {
                                                        handleClick( e, cat.name )
                                                    }} >{cat.name}</span>
                                                </li>
                                            )
                                        } )}
                                    </div>
                                </div>
                            </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
