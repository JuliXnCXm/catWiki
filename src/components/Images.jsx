import React, {useEffect, useState} from 'react'
import {imagesApi} from '../context/Api'
import '../styles/Images.css'

const Images = ({catId}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch(`${imagesApi}/${catId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }).then( async (res) => {
            let json = await res.json()
            setImages(json)}
        ).catch(
            err => console.log(err)
        )
    }, [catId])

    return (
        <div className='catImagesContainer'>
            <h1 className='catImagesContainer--title'>Other photos</h1>
            <div>

            {images.map(image => (
                <img className='catImagesContainer--image' src={image.url} alt={image.id}/>
                ))}
            </div>
        </div>
    )
}

export default Images
