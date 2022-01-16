import React from 'react'
import '../styles/MeterLine.css'
const Meter = ({value}) => {

    return (
        <>
            <div className='meterLine'>
                {new Array(5).fill(null).map( ( space, idx ) =>
                {
                    return <div style={{ backgroundColor: idx < value ? "#544439" :"#E0E0E0"}} className='meterLine--meter'></div>
                })}
            </div>
        </>
    )
}

export default Meter
