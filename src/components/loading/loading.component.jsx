import React, { useRef, useEffect } from 'react';
import { LoadingOverlay } from './loading.style';
import { TweenLite, Expo } from 'gsap';

const Loading = () => {
    const loadingOverlay = useRef(null);
    useEffect(() => {
        TweenLite.set(loadingOverlay.current, { height: '100vh' });
        TweenLite.to(loadingOverlay.current, 1.5, {
            height: 0,
            ease: Expo.easeInOut
          });
    })
    return(
        <LoadingOverlay ref={loadingOverlay}></LoadingOverlay>
    )
};

export default Loading;