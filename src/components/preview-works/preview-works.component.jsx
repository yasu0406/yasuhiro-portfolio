import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { TweenLite, Expo } from 'gsap';
import { Container, WorksList, WorksTitle, TitleBox, ViewMore, TypeOfWork, WorkImg } from './preview-works.style';
import worImg from '../../images/works-01.png';

const PreviewWorks = ({circleRed, fuji}) => {
    const worksUl = useRef(null);
    const [workList, setWorkList] = useState([]);
    useEffect(() => {
        TweenLite.to(worksUl.current, 1, {
            delay:6,
            opacity: 1,
            transform: 'translateY(0)',
            visibility: 'visible'
        });
        for(var i = 0; i < workList.length; i++) {
            workList[i].addEventListener('mouseenter', e => {
                workList.filter(work => e.target !== work).map(work => {
                    work.className = 'work-opacity';
                });
                TweenLite.to(document.querySelectorAll('.work-opacity'), 1, {
                    opacity:0.5
                });
                TweenLite.to(document.querySelectorAll('.work-opacity h1'), 1, {
                    fontSize: '10rem'
                });
                TweenLite.to(e.target.querySelector('p'), 1, {
                    width: '22rem',
                    right: '-30rem'
                });
                TweenLite.to(e.target.querySelector('a'), 1, {
                    opacity: 1,
                    delay:0.5,
                    visibility: 'visible',
                    transform: 'translateY(0)'
                });
                TweenLite.to(circleRed.current, 2, {
                    right: '-100%',
                    ease: Expo.easeInOut
                });
                TweenLite.to(fuji.current, 2, {
                    opacity: 0,
                    ease: Expo.easeInOut
                });
                TweenLite.to(document.querySelector('.workImg'), 2, {
                    width: '63.5rem',
                    ease: Expo.easeInOut,
                });
            });
            workList[i].addEventListener('mouseleave', e => {
                workList.filter(work => e.target !== work).map(work => {
                    work.className = '';
                });
                TweenLite.to(document.querySelectorAll('li'), 1, {
                    opacity:1
                });
                TweenLite.to(document.querySelectorAll('li h1'), 1, {
                    fontSize: '12rem'
                });
                TweenLite.to(e.target.querySelector('p'), 1, {
                    width: '6.4rem',
                    right: '-9rem'
                });
                TweenLite.to(e.target.querySelector('a'), 1, {
                    opacity: 0,
                    visibility: 'hidden'
                });
                TweenLite.to(circleRed.current, 2, {
                    right: '0',
                    ease: Expo.easeInOut
                  });
                TweenLite.to(fuji.current, 2, {
                    opacity: 1,
                    ease: Expo.easeInOut,
                    
                });
                TweenLite.to(document.querySelector('.workImg'), 2, {
                    width: 0,
                    ease: Expo.easeInOut,
                });
                });
        }
    }, []);
    const test = (i) => {
        
    } 
    return(
        <>
        <WorkImg className='workImg' style={{backgroundImage: `url(${worImg})`}}/>
        <Container>
            
            <WorksList ref={worksUl}>
                <li ref={(slide) => { workList.push(slide) }}>
                    <TitleBox 
                        className='title-box'
                    >
                        <WorksTitle>soccer meet<ViewMore><Link>view more</Link></ViewMore></WorksTitle>
                        <TypeOfWork>mobile app</TypeOfWork>
                    </TitleBox>
                </li>
                <li ref={(slide) => { workList.push(slide) }}>
                    <TitleBox 
                        className='title-box' 
                        
                    >
                        <WorksTitle>soccer meet<ViewMore><Link>view more</Link></ViewMore></WorksTitle>
                        <TypeOfWork>mobile app</TypeOfWork>
                    </TitleBox>
                </li>
                <li ref={(slide) => { workList.push(slide) }}>
                    <TitleBox 
                        className='title-box' 
                        
                    >
                        <WorksTitle>soccer meet<ViewMore><Link>view more</Link></ViewMore></WorksTitle>
                        <TypeOfWork>mobile app</TypeOfWork>
                    </TitleBox>
                </li>
                <li ref={(slide) => { workList.push(slide) }}>
                    <TitleBox 
                        className='title-box' 
                        
                    >
                        <WorksTitle>soccer meet<ViewMore><Link>view more</Link></ViewMore></WorksTitle>
                        <TypeOfWork>mobile app</TypeOfWork>
                    </TitleBox>
                </li>
            </WorksList>
        </Container>
        </>
    )
};

export default PreviewWorks;