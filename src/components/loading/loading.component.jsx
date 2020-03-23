import React, { useRef, useEffect } from 'react';
import { LoadingOverlay } from './loading.style';
import { TweenLite, Expo } from 'gsap';

const Loading = () => {
    const loadingOverlay = useRef(null);
    const title = useRef(null);
    useEffect(() => {
        TweenLite.set(loadingOverlay.current, { height: '100vh' });
        TweenLite.to(loadingOverlay.current, 1, {
            delay: 0.5,
            height: 0,
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
    })
    return(
        <LoadingOverlay ref={loadingOverlay}></LoadingOverlay>
    )
};

export default Loading;