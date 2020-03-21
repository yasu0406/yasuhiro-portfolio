import React, { useRef, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { TweenLite, Expo } from 'gsap';
import { MtAnimation, FuhiImg } from './animatedCommonLoading.style';

import ProfileComponent from '../profile/profile.component';
import PreviewWorks from '../preview-works/preview-works.component';
import WorkDetailComponent from '../work-detail/work-detail.component';

import fuji from '../../images/fuji.svg';

const AnimatedCommonLoading = (props) => {
    const circleRed = useRef(null);
    const title = useRef(null);
    const fujiImage = useRef(null); 
    useEffect(() => {
        TweenLite.set(circleRed.current, { scale: 0 });
        TweenLite.to(circleRed.current, 2.5, {
            delay: 1.5,
            scale: 1,
            zIndex: 0,
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
        <>
        <MtAnimation ref={circleRed}>
          <h1 ref={title}>{props.title}</h1>
        </MtAnimation>
        <Route exact path='/profile' component={() => <ProfileComponent circleRed={circleRed} />} />
        <Route exact path='/works' component={routeProps => <PreviewWorks {...routeProps} fuji={<FuhiImg ref={fujiImage} src={fuji} />} circleRed={circleRed} />} />
        <Route exact path='/works/:title' component={routeProps => <WorkDetailComponent {...routeProps} circleRed={circleRed} />} />
        </>
    )
};

export default AnimatedCommonLoading;