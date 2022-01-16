import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { server, singleImageApi } from '../context/Api'


const useCatInfo = () => {

    let { catname } = useParams()

    const [ cat, setCat ] = useState(undefined)
    const [image, setImage] = useState([])

    useEffect( () =>
    {
        fetch( `${ server }/${ catname }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        } ).then( async ( res ) =>
        {
            let json = await res.json()
            setCat(json[0])
        } ).catch( err => console.log( err ) )

    }, [ catname ] )

    if (cat) {
        fetch(`${ singleImageApi }/${ cat.reference_image_id }`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        } ).then( async ( res ) =>
        {
            let json = await res.json()
            setImage(json.url)
        } ).catch( err => console.log( err ) )

    }


    return {
        cat,
        catname,
        image
    }
}

export default useCatInfo
