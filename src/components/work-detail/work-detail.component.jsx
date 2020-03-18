import React, {
    useEffect,
    useRef
} from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, Linear, Expo } from 'gsap';
import ScrollMagic from 'scrollmagic';

import { InnerConatiner, MainInnerConatiner, FirstConatiner, WorkImg, SecondConatiner, WorkDescription, FooterNav, WorkButton} from './work-detail.style';
import { Title, Text } from '../../styles/base.style';

import workD from '../../images/work-detail.png';
import workD02 from '../../images/work-detail02.png';
import workButton from '../../images/workButton.svg';

const WorkDetailComponent = ({circleRed}) => {
    const firstContainer = useRef(null);
    const secondContainer = useRef(null);
    const thirdContainer = useRef(null);
    const mainTitle = useRef(null);
    const mainText = useRef(null);
    const viewText = useRef(null);
    const viewButton = useRef(null);
    const mainWorkImg = useRef(null);
    const secondWorkImg = useRef(null);
    const thirdWorkImg = useRef(null);
    let category = [];
    let footerLinks = [];
    const workImg = useRef(null);
    const controller = new ScrollMagic.Controller();
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        TweenLite.to(workImg.current, 10,{rotation:"360", ease:Linear.easeNone, repeat:-1});
        mainAnimation();
        new ScrollMagic.Scene({
            triggerElement: secondContainer.current
            }).setClassToggle(secondContainer.current, "active").addTo(controller);
            new ScrollMagic.Scene({
                triggerElement: thirdContainer.current
            }).setClassToggle(thirdContainer.current, "active").addTo(controller);
            mouseOn();
            mouseOut();
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const mainAnimation = () => {
          TweenLite.to(circleRed.current, 2, {
            delay: 4,
            transform: 'scale(0.8)',
            zIndex:'-5',
            ease: Expo.easeInOut
        });
        TweenLite.to(mainTitle.current, 0.5, {
            delay:5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(mainText.current, 0.5, {
            delay:5.2,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(viewButton.current, 1, {
            delay:5.5,
            opacity: 1,
            ease:Linear.easeNone
        });
        TweenLite.to(viewText.current, 0.5, {
            delay:5.5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(mainWorkImg.current, 1, {
            delay:6.5,
            height: '55rem',
            ease:Linear.easeNone
        });
    }

    const handleScroll = () => {
        var y = window.pageYOffset;
        if(0 < y) {
            TweenLite.to(firstContainer.current, 0, {
                zIndex:'-1',
                position: 'fixed'
            });
        } else {
            TweenLite.to(firstContainer.current, 1, {
                zIndex:'1'
            });
        }
        if(secondContainer.current.classList.contains('active')) {
            TweenLite.to(category[0], 0.5, {
                delay:0.3,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(category[1], 0.5, {
                delay:0.5,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(category[2], 0.5, {
                delay:0.8,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(category[3], 0.5, {
                delay:1.1,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(category[4], 0.5, {
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(secondWorkImg.current, 0.5, {
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
        } else {
            TweenLite.to(category[0], 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(category[1], 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(category[2], 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(category[3], 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(category[4], 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(secondWorkImg.current, 0.5, {
                transform: "translateY(100%)",
                ease:Linear.easeNone
            });
        };
        if(thirdContainer.current.classList.contains('active')) {
            TweenLite.to(thirdWorkImg.current, 1, {
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
        } else {
            TweenLite.to(thirdWorkImg.current, 0.5, {
                transform: "translateY(100%)",
            });
        };
      };
      const mouseOn = () => {
        for(var i = 0; i < footerLinks.length; i++) {
            footerLinks[i].addEventListener('mouseenter', e => {
                footerLinks.filter(link => e.target !== link && link !== null).map(link => {
                    TweenLite.to(link, 1, {
                        width:'40vw'
                    });
                });
                TweenLite.to(e.target, 1, {
                    width: '60vw'
                });
                TweenLite.to(e.target.querySelector('span'), 1, {
                    opacity: 0.2
                });
            });
        }
    };

    const mouseOut = () => {
        for(var i = 0; i < footerLinks.length; i++) {
            footerLinks[i].addEventListener('mouseleave', e => {
                TweenLite.to(footerLinks, 1, {
                    width: '50vw'
                });
                TweenLite.to(e.target.querySelector('span'), 1, {
                    opacity: 0
                });
            });
        }
    };
    return(
        <>
        <FirstConatiner ref={firstContainer}>
            <WorkImg ref={mainWorkImg} className='workImg'><img src={workD} /></WorkImg>
            <MainInnerConatiner>
                <Title><span ref={mainTitle}>Soccer Meet</span></Title>
                <WorkDescription>
                    <Text><span ref={mainText}>Designing and planning project goals. Managing task delegation within team. Meeting with clients to discuss about client needs. Designing and creating an interface for JK Excellence to market tutoring service for prospective students.</span></Text>
                </WorkDescription>
            </MainInnerConatiner>
            <WorkButton ref={viewButton}><img ref={workImg} src={workButton}/></WorkButton>
        </FirstConatiner>
        <SecondConatiner>
            <InnerConatiner ref={secondContainer}>
                <ul>
                    <li>
                        <ul>
                            <li><span ref={(e) => {category.push(e)}}>Concept</span></li>
                            <li><span ref={(e) => {category.push(e)}}>UX</span></li>
                            <li><span ref={(e) => {category.push(e)}}>WEB DEVELOPMENT</span></li>
                            <li><span ref={(e) => {category.push(e)}}>BACK-END</span></li>
                        </ul>
                    </li>
                    <li>
                        <Text ref={(e) => {category.push(e)}}>I am excited to be applying for the Front-End Engineer (Entry-Level) at Engine Digital. I am an experienced developer from Japan who studied Web Development at Cornerstone International Community College of Canada. I believe that my extensive experience in the field makes me an ideal candidate for the position at Engine Digital.</Text>
                    </li>
                </ul>
                <div><img ref={secondWorkImg} className='workImg' src={workD}/></div>
            </InnerConatiner>
            <InnerConatiner ref={thirdContainer}>
                <div><img ref={thirdWorkImg} className='workImg' src={workD02}/></div>
            </InnerConatiner>
            <FooterNav >
                <ul>
                    <li ref={(e) => {footerLinks.push(e)}}><Link to=''>prev</Link><span>prev</span></li>
                    <li ref={(e) => {footerLinks.push(e)}}><Link to=''>next</Link><span>next</span></li>
                </ul>
            </FooterNav>
        </SecondConatiner>
        </>
    )
};

export default WorkDetailComponent;