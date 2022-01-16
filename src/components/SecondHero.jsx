import React from 'react'
import '../styles/SecondHero.css'
const SecondHero = () => {
    return (
        <div className='heroSecondSection'>
            <div style={{"paddingBottom":"40px"}}></div>
            <span className='heroSecondSection--subtitle'>Most Searched Breeds</span>
            <div className='line'></div>
            <div className='heroSecondSection--title'>
                <h1>66+ Breeds For you to discover</h1>
                <a className='heroSecondSection--title__link' href='/' >
                    see more
                    <i class="material-icons-outlined material-icons">
                        arrow_right_alt
                    </i>
                </a>
            </div>
            <div className='catsSearchedContainer'>
                <div id="bengal" >
                    <img src="https://cdn2.thecatapi.com/images/Rl39SPjDO.png" alt="" />
                    <span>Bengal</span>
                </div>
                <div id="savannah">
                    <img src="https://cdn2.thecatapi.com/images/a8nIYvs6S.jpg" alt="" />
                    <span>Savannah</span>
                </div>
                <div id="norwegian">
                    <img src="https://cdn2.thecatapi.com/images/06dgGmEOV.jpg" alt="" />
                    <span>Norwegian Forest Cat</span>
                </div>
                <div id="selkirk">
                    <img src="https://cdn2.thecatapi.com/images/enV_ZqSpp.jpg" alt="" />
                    <span>Selkirk Rex</span>
                </div>
            </div>
        </div>
    )
}

export default SecondHero
