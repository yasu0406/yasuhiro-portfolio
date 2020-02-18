import React, { useRef, useEffect } from 'react';
import { TweenLite, Expo } from 'gsap';
import { MtAnimation, FuhiImg } from './animatedWorks.style';
import PreviewWorks from '../preview-works/preview-works.component';

import fuji from '../../images/fuji.svg';

const AnimatedWorks = () => {
    const circleRed = useRef(null);
    const title = useRef(null);
    const fujiImage = useRef(null); 
    useEffect(() => {
        TweenLite.set(circleRed.current, { scale: 0 });
        TweenLite.to(circleRed.current, 2.5, {
            delay: 1.5,
            scale: 1,
            ease: Expo.easeInOut
          });

          TweenLite.to(title.current, 3, {
            delay: 1.7,
            height:'200px',
            fontSize: '15.2rem',
            scale: 10,
            ease: Expo.easeInOut,
            opacity: 0
          });

          TweenLite.to(fujiImage.current, 3, {
            delay: 2,
            ease: Expo.easeInOut,
            opacity:1
          });

          TweenLite.to(fujiImage.current, 3, {
            delay: 3.5,
            ease: Expo.easeInOut,
            right: '-80%'
          });
        
    })
    return(
        <>
        <MtAnimation ref={circleRed}>
            <h1 ref={title}>Works</h1>
        </MtAnimation>
        <FuhiImg ref={fujiImage} src={fuji} />
        <PreviewWorks fuji={fujiImage} circleRed={circleRed} />
        </>
    )
};

export default AnimatedWorks;