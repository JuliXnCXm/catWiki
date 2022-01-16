import React from 'react'
import '../styles/CatInfo.css'
import logo from '../assets/CatwikiLogo.svg'
import Footer from '../components/Footer';
import Meter from '../components/Meter';
import Images from '../components/Images';
import useCatInfo from '../hooks/useCatInfo';

const CatInfo = () => {

    const [loading ,setLoading] = React.useState(true)
    const {cat, catname, image} = useCatInfo();

    setTimeout(() => {
        setLoading(false)
    } , 1000)

    return ( loading ? <div>Loading...</div> :
        (
        <>
            <div>
                <img className='headerLogo' src={logo} alt="" />
                <div className='catContainer'>
                    <img className='catContainer--image' src={image} alt="" />
                    <div className='catContainer--info'>
                        <h1 className='catContainer--info__title'>{catname}</h1>
                        <p className='catContainer--info__description'>The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.
                        </p>
                        <ul className='catConatiner--info__list'>
                            <li>
                                <span>
                                    <strong>Temperament: </strong>{cat.temperament}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Origin: </strong>{cat.origin}
                                </span>
                            </li>
                            <li>
                                <span>
                                    <strong>Life Span: </strong>{cat.life_span} years
                                </span>
                            </li>
                            <li>
                                <strong>Adaptability: </strong>
                                <Meter value={cat.adaptability}/>
                            </li>
                            <li>
                                <strong>Affection level: </strong>
                                <Meter value={cat.affection_level} />
                            </li>
                            <li>
                                <strong>Child Friendly: </strong>
                                <Meter value={cat.child_friendly} />
                            </li>
                            <li>
                                <strong>Grooming: </strong>
                                <Meter value={cat.gromming} />
                            </li>
                            <li>
                                <strong>Intelligence: </strong>
                                <Meter value={cat.intelligence} />
                            </li>
                            <li>
                                <strong>Health issues: </strong>
                                <Meter value={cat.health_issues}/>
                            </li>
                            <li>
                                <strong>Social needs: </strong>
                                <Meter value={cat.social_needs} />
                            </li>
                            <li>
                                <strong>Stranger Friendly: </strong>
                                <Meter value={cat.stranger_friendly} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Images catId={cat.id}/>
            <Footer/>
        </>
    ))
}

export default CatInfo