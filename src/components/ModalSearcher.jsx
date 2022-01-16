import React from 'react'
import useHero from '../hooks/useHero';
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import '../styles/ModalSearcher.css'


const ModalSearcher = ({show, handleClose}) => {


    const { filteredCats, setQuery } = useHero()

    const navigate = useNavigate()

    const handleClick = ( e, cat ) => {
        e.preventDefault()
        navigate( `/${ cat }` )
    }

    return (
        <Modal show={show} >
            <div>
                <i class="close-icon material-icons  material-icons-outlined" onClick={handleClose}>
                    close
                </i>
                <div className='heroContainer--form__input inputSearcher'>
                    <i className="material-icons heroContainer--form__icon">search</i>
                    <input type="search" placeholder='Enter your breed' name="catname" id="myDropdown" onChange={(e) => {
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
            </div>
        </Modal>
    )
}

export default ModalSearcher
