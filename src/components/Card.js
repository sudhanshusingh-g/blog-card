import React from 'react';
import illustration from '../assets/images/illustration-article.svg';
import profile from '../assets/images/image-avatar.webp';
export default function Card() {
    return (
        <>
            <div className='card'>
                <div className='image'>
                    <img
                        src={illustration}
                        alt="Illustration"
                    />
                </div>
                <div className='tag'>
                    <p>Learning</p>
                    <p>Published 21 Dec 2023</p>
                </div>
                <div className='title'>
                    HTML & CSS foundations
                </div>
                <div className='description'>
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </div>

                <div className='footer'>
                    <img
                        src={profile}
                        alt="Publisher name"
                    />
                    Greg Hooper
                </div>
            </div>
        </>

    )
}
