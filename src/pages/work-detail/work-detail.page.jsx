import React, {
    useEffect,
    useRef
} from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';

import Loading from '../../components/loading/loading.component';

import { InnerConatiner, MainInnerConatiner, FirstConatiner, MainRight, VisitButton, WorkImg, SecondConatiner, FooterNav} from './work-detail.style';
import { Title, Text } from '../../styles/base.style';

import workImg from '../../images/works-01.png';
import workD from '../../images/work-detail.png';
import workD02 from '../../images/work-detail02.png';

const WorkDetail = () => {
    const firstContainer = useRef(null);
    const secondContainer = useRef(null);
    const thirdContainer = useRef(null);
    const mainTitle = useRef(null);
    const mainText = useRef(null);
    const viewText = useRef(null);
    const viewButton = useRef(null);
    const mainWorkImg = useRef(null);
    const mainRight = useRef(null);
    const secondWorkImg = useRef(null);
    const thirdWorkImg = useRef(null);
    const textSpan01 = useRef(null);
    const textSpan02 = useRef(null);
    const textSpan03 = useRef(null);
    const textSpan04 = useRef(null);
    const textSpan05 = useRef(null);
    const controller = new ScrollMagic.Controller();
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        mainAnimation();
        new ScrollMagic.Scene({
            triggerElement: secondContainer.current
            }).setClassToggle(secondContainer.current, "active").addTo(controller);
            new ScrollMagic.Scene({
                triggerElement: thirdContainer.current
            }).setClassToggle(thirdContainer.current, "active").addTo(controller);
        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const mainAnimation = () => {
        TweenLite.to(mainTitle.current, 0.5, {
            delay:1.8,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(mainText.current, 0.5, {
            delay:2.2,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(viewButton.current, 0.5, {
            delay:2.5,
            width: "12rem",
            ease:Linear.easeNone
        });
        TweenLite.to(viewText.current, 0.5, {
            delay:3.5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(mainRight.current, 0.5, {
            delay:4,
            height: '100vh',
            ease:Linear.easeNone
        });
        TweenLite.to(mainWorkImg.current, 1, {
            delay:4.5,
            width: '80rem',
            ease:Linear.easeNone
        });
    }

    const handleScroll = () => {
        var y = window.pageYOffset;
        if(0 < y) {
            TweenLite.to(firstContainer.current, 0, {
                zIndex:'-1',
                position: 'fixed'
            })
        } else {
            TweenLite.to(firstContainer.current, 1, {
                zIndex:'1'
            })
        }
        if(secondContainer.current.classList.contains('active')) {
            TweenLite.to(textSpan01.current, 0.5, {
                delay:0.3,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(textSpan02.current, 0.5, {
                delay:0.5,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(textSpan03.current, 0.5, {
                delay:0.8,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(textSpan04.current, 0.5, {
                delay:1.1,
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(textSpan05.current, 0.5, {
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
            TweenLite.to(secondWorkImg.current, 0.5, {
                transform: "translateY(0%)",
                ease:Linear.easeNone
            });
        } else {
            TweenLite.to(textSpan01.current, 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(textSpan02.current, 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(textSpan03.current, 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(textSpan04.current, 0.5, {
                transform: "translateY(100%)",
            });
            TweenLite.to(textSpan05.current, 0.5, {
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
    return(
        <>
        <Loading />
        <FirstConatiner ref={firstContainer}>
            <WorkImg ref={mainWorkImg} className='workImg'><img src={workImg} /></WorkImg>
            <MainRight ref={mainRight} />
            <MainInnerConatiner>
                <Title><span ref={mainTitle}>Soccer Meet</span></Title>
                <Text><span ref={mainText}>Designing and planning project goals. Managing task delegation within team. Meeting with clients to discuss about client needs. Designing and creating an interface for JK Excellence to market tutoring service for prospective students.</span></Text>
                <VisitButton ref={viewButton}><span ref={viewText}>visit site</span></VisitButton>
            </MainInnerConatiner>
        </FirstConatiner>
        <SecondConatiner>
            <InnerConatiner ref={secondContainer}>
                <ul>
                    <li>
                        <ul>
                            <li><span ref={textSpan01}>Concept</span></li>
                            <li><span ref={textSpan02}>UX</span></li>
                            <li><span ref={textSpan03}>WEB DEVELOPMENT</span></li>
                            <li><span ref={textSpan04}>BACK-END</span></li>
                        </ul>
                    </li>
                    <li>
                        <Text ref={textSpan05}>I am excited to be applying for the Front-End Engineer (Entry-Level) at Engine Digital. I am an experienced developer from Japan who studied Web Development at Cornerstone International Community College of Canada. I believe that my extensive experience in the field makes me an ideal candidate for the position at Engine Digital.</Text>
                    </li>
                </ul>
                <div><img ref={secondWorkImg} className='workImg' src={workD}/></div>
            </InnerConatiner>
            <InnerConatiner ref={thirdContainer}>
                <div><img ref={thirdWorkImg} className='workImg' src={workD02}/></div>
            </InnerConatiner>
            <FooterNav >
                <ul>
                    <li><Link>prev</Link></li>
                    <li><Link>next</Link></li>
                </ul>
            </FooterNav>
        </SecondConatiner>
        </>
    )
};

export default WorkDetail;