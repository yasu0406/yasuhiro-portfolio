import React, { useEffect, useRef, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { TweenLite, Expo} from 'gsap';
import { Container, WorksList, ViewMore, TypeOfWork, WorkImg } from './preview-works.style';
import { Title } from '../../styles/base.style';

import ProjectsContext from '../../context/projects/projects.context';

const PreviewWorks = ({circleRed, fuji}) => {
    const projects = useContext(ProjectsContext);
    const worksUl = useRef(null);
    const workImg = useRef(null);
    const workImgSrc = useRef(null);
    const currentContainer = useRef(null);
    let workList = [];
    let history = useHistory();
    let clientWidth = document.getElementById('root').clientWidth;
    const changePage = (e, destination) => {
        e.preventDefault();
        TweenLite.to(fuji.ref.current, 1, {
            opacity:0
        })
        TweenLite.to(worksUl.current, 1, {
            opacity:0
        })
        TweenLite.to(workImg.current, 1, {
            opacity:0
        })
        TweenLite.to(circleRed.current, 0.5, {
            delay:1,
            transform: 'scale(5)',
            zIndex: 99999,
            right: 0,
            ease: Expo.easeInOut
        })
        setTimeout(() => {
          history.push(destination);
        }, 1500);
    };
    useEffect(() => {
        worksAnimation();
        return () => {
            window.removeEventListener('mousemove', worksAnimation);
            window.removeEventListener('mouseenter', mouseOn);
            window.removeEventListener('mouseleave', mouseOut);
          };
    }, []);
    const worksAnimation = () => {
        TweenLite.to(worksUl.current, 1, {
            delay:6,
            opacity: 1,
            transform: 'translateY(0)',
            visibility: 'visible'
        });
        TweenLite.to(fuji.ref.current, 3, {
            delay: 2,
            ease: Expo.easeInOut,
            opacity:1
          });

          TweenLite.to(fuji.ref.current, 3, {
            delay: 3.5,
            ease: Expo.easeInOut,
            right: '-80%'
          });
    }
    const mouseOn = () => {
        for(var i = 0; i < workList.length; i++) {
            workList[i].addEventListener('mouseenter', e => {
                workList.filter(work => e.target !== work && work !== null).map(work => {
                    TweenLite.to(work.querySelector('.title-box'), 1, {
                        opacity:0.5
                    });
                    TweenLite.to(work.querySelector('h1'), 1, {
                        fontSize: '10rem',
                        ease: Expo.easeInOut
                    });
                    TweenLite.to(work.querySelector('p'), 1, {
                        transform: 'scale(0.8)',
                        ease: Expo.easeInOut
                    });
                });
                workImgSrc.current.src = `/images/thumb-${e.target.id}.png`;
                TweenLite.to(e.target.querySelector('li p'), 1, {
                    width: '22rem',
                    right: '-30rem',
                    ease: Expo.easeInOut
                });
                TweenLite.to(e.target.querySelector('h1 p'), 1, {
                    background: '#E33642'
                });
                TweenLite.to(e.target.querySelector('li a'), 1, {
                    opacity: 1,
                    transform: 'translateY(0)',
                    ease: Expo.easeInOut
                });
                TweenLite.to(circleRed.current, 2, {
                    right: '-100%',
                    ease: Expo.easeInOut
                });
                TweenLite.to(fuji.ref.current, 2, {
                    opacity: 0,
                    ease: Expo.easeInOut
                });
                TweenLite.to(workImg.current, 2, {
                    width: '63.5rem',
                    ease: Expo.easeInOut,
                });
            });
        }
    };

    const mouseOut = () => {
        for(var i = 0; i < workList.length; i++) {
            workList[i].addEventListener('mouseleave', e => {
                TweenLite.to(document.querySelectorAll('.title-box'), 1, {
                    opacity:1
                });
                TweenLite.to(document.querySelectorAll('li h1'), 1, {
                    fontSize: '12rem',
                    ease: Expo.easeInOut
                });
                TweenLite.to(document.querySelectorAll('li p'), 1, {
                    transform: 'scale(1)',
                    ease: Expo.easeInOut
                });
                TweenLite.to(e.target.querySelector('li p'), 1, {
                    width: '6.4rem',
                    right: '-10rem',
                    ease: Expo.easeInOut
                });
                TweenLite.to(e.target.querySelector('h1 p'), 1, {
                    background: '#EA6871'
                });
                TweenLite.to(e.target.querySelector('li a'), 0.5, {
                    opacity: 0
                });
                TweenLite.to(circleRed.current, 2, {
                    right: '0',
                    ease: Expo.easeInOut
                  });
                TweenLite.to(fuji.ref.current, 2, {
                    opacity: 1,
                    ease: Expo.easeInOut,
                });
                TweenLite.to(workImg.current, 2, {
                    width: 0,
                    ease: Expo.easeInOut,
                });
            });
        }
    };
    const worksRender = () => {
        return projects.map(work => {
            if(clientWidth > 1024) {
                return (
                    <li id={work.id} key={work.id} ref={(e) => { workList.push(e) }} onMouseEnter={mouseOn.bind(this)} onMouseLeave={mouseOut.bind(this)}>
                        <div 
                            className='title-box'
                        >
                            <Title><span>{work.title}</span><ViewMore><a onClick={e => changePage(e, `/works/${work.url}`)}>view more</a></ViewMore></Title>
                            <TypeOfWork>{work.type} app</TypeOfWork>
                        </div>
                    </li>
                )
            } else if(clientWidth <= 1024) {
                return (
                    <li key={work.id} ref={(e) => { workList.push(e) }} onClick={e => changePage(e, `/works/${work.url}`)}>
                        <div 
                            className='title-box'
                        >
                            <Title><span>{work.title}</span><ViewMore><a onClick={e => changePage(e, `/works/${work.url}`)}>view more</a></ViewMore></Title>
                            <TypeOfWork>{work.type} app</TypeOfWork>
                        </div>
                    </li>
                )
            }
        })
    }
    return(
        <>
        {fuji}
        <Container ref={currentContainer}>
            <WorkImg ref={workImg}><img ref={workImgSrc} src='/images/thumb-1.png' alt='thumbnail:img' /></WorkImg>
            <WorksList ref={worksUl}>
                {worksRender()}
            </WorksList>
        </Container>
        </>
    )
};

export default PreviewWorks;