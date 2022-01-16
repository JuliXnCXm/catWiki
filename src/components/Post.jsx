import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import '../styles/Post.css'


const Post = () => {
    return (
        <div className='postContainer'>
            <div className='postContainer--info heroSecondSection--title'>
                <div className='line'></div>
                <h1 >Why should you have a cat? </h1>
                <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                <a className='heroSecondSection--title__link' href='/' >
                    Read More
                    <i class="material-icons-outlined material-icons">
                        arrow_right_alt
                    </i>
                </a>
            </div>
            <div className='postContainer--images'>
                <div className='postContainer--images__group1'>
                    <img id="horizontal" src={image2} alt="" />
                    <img id="vertical" src={image1} alt="" />
                </div>
                    <img src={image3} alt="" />
            </div>
        </div>
    )
}

export default Post
