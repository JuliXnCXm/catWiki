import React, {useState, useEffect , useMemo} from 'react'
import { server } from '../context/Api'


const useHero = () => {
    const [ cats, setCats ] = useState( [] )
    const [ filteredCats, setFilteredCats ] = useState( [] )
    const [ mobile, setMobile ] = useState( false )
    const [ query, setQuery ] = useState( '' )


    useEffect( () =>
    {
        fetch( server, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        },
        ).then( async ( res ) =>
        {
            let json = await res.json()
            setCats( json )
        } ).catch( err =>
        {
            console.log( err )
        } )
    }, [] )

    useMemo( () =>
    {
        const result = cats.filter( cat =>
        {
            return cat.name.toLowerCase().includes( query )
        } )
        setFilteredCats( result )
    }
        , [ cats, query ] )

    window.addEventListener( 'resize', () =>
    {
        if ( window.innerWidth < 600 )
        {
            setMobile( true )
        } else
        {
            setMobile( false )
        }
    } )

    return {
        cats,
        filteredCats,
        query,
        setQuery,
        mobile
    }
}

export default useHero
