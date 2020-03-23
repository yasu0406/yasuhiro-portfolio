import React, { useEffect, useRef, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { TweenLite, Expo } from 'gsap';
import ScrollMagic from 'scrollmagic';
import ProjectsContext from '../../context/projects/projects.context';

import { Title, Text, ScrollDown } from '../../styles/base.style';
import { InnerConatiner, MainInnerConatiner, FirstConatiner, WorkImg, SecondConatiner, ProjectImgDiv, FooterNav} from './work-detail.style';

const WorkDetailComponent = (props) => {
    const projects = useContext(ProjectsContext);
    const controller = new ScrollMagic.Controller();
    const projectDetail = projects.filter(project => project.url === props.match.params.title);
    const {id, title, description, imgUrl, bgColor, viewLink, projectImg01, projectImg02, projectImg03, projectImg04, date, develop, project, useProgram, appleStore, googlePlay} = projectDetail[0];
    const prevId = id !== 1 ? id - 1 : null;
    const nextId = id !== projects.length ? id + 1 : null;
    const prevUrl = projects.filter(project => project.id === prevId);
    const nextUrl = projects.filter(project => project.id === nextId);
    const firstContainer = useRef(null);
    const secondContainer = useRef(null);
    const thirdContainer = useRef(null);
    const mainTitle = useRef(null);
    const mainText = useRef(null);
    const mainWorkImg = useRef(null);
    const projectDescription = useRef(null);
    const footerNav = useRef(null);
    const scrollDwon = useRef(null);
    let category = [];
    let footerLinks = [];
    let projectsImg = [];
    let projectsImgDiv = [];
    let history = useHistory();
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        mainAnimation();
        new ScrollMagic.Scene({
            triggerElement: secondContainer.current
            }).on("enter", function (event) {
                TweenLite.to(category[0], 0.5, {
                    delay:0.3,
                    transform: "translateY(0)",
        
                });
                TweenLite.to(category[1], 0.5, {
                    delay:0.5,
                    transform: "translateY(0)",
        
                });
                TweenLite.to(category[2], 0.5, {
                    delay:0.8,
                    transform: "translateY(0)",
        
                });
                TweenLite.to(category[3], 0.5, {
                    delay:1.1,
                    transform: "translateY(0)",
        
                });
                TweenLite.to(category[4], 0.5, {
                    delay:1.4,
                    transform: "translateY(0)",
                });
                TweenLite.to(projectDescription.current, 0.5, {
                    transform: "translateY(0)",
                });
            }).on("leave", function (event) {
                category.map(cate => {
                    TweenLite.to(cate, 0.5, {
                        transform: "translateY(100%)",
                    });
                })
                TweenLite.to(projectDescription.current, 0.5, {
                    transform: "translateY(100%)",
                });
            }).setClassToggle(secondContainer.current, "active").addTo(controller);

            projectsImgDiv.map(projectImgDiv => {
                new ScrollMagic.Scene({
                    triggerElement: projectImgDiv
                }).setClassToggle(projectImgDiv, "active")
                .on("enter", function (event) {
                    projectEnterAnimation();
                })
                .on("leave", function (event) {
                    projectLeaveAnimation();
            }).addTo(controller);
            });
        return()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mouseenter', mouseOn);
            window.removeEventListener('mouseleave' ,mouseOut);
        }
    }, []);

    const changePage = (e, destination) => {
        e.preventDefault();
        TweenLite.to(footerLinks, 1, {
            width: '50vw'
        });
        TweenLite.to(footerNav.current.querySelector('ul'), 0.5, {
            opacity:0
        });
        TweenLite.to(footerNav.current, 0.5, {
            delay:0.5,
            scale:10
        });
        TweenLite.to(e.target.querySelector('span'), 1, {
            opacity: 0
        });
        setTimeout(() => {
          history.push(destination);
        }, 1500);
    };

    const mainAnimation = () => {
        TweenLite.to(props.circleRed.current, 2, {
            delay: 4,
            transform: 'scale(0.8)',
            zIndex:'-5',
            ease: Expo.easeInOut
        });
        TweenLite.to(scrollDwon.current, 1, {
            delay:5,
            opacity: 1,
        });
        TweenLite.to(mainTitle.current, 0.5, {
            delay:5,
            transform: "translateY(0%)",
        });
        TweenLite.to(mainText.current, 0.5, {
            delay:5.2,
            transform: "translateY(0%)",
        });
        TweenLite.to(mainWorkImg.current, 1.5, {
            delay:6.5,
            height: 'auto',
            ease: Expo.easeInOut
        });
    }

    const projectEnterAnimation = () => {
        projectsImgDiv.filter(projectImgDiv => projectImgDiv.classList.contains('active')).map(projectImgDiv => {
            TweenLite.to(projectImgDiv.querySelector('div'), 1, {
                width: "0",
                ease: Expo.easeInOut
            });
        });
    }
    const projectLeaveAnimation = () => {
        projectsImgDiv.filter(projectImgDiv => !projectImgDiv.classList.contains('active')).map(projectImgDiv => {
            TweenLite.to(projectImgDiv.querySelector('div'), 1, {
                width: "100%"
            });
        });
    }
    const handleScroll = () => {
        var y = window.pageYOffset;
        if(0 < y) {
            TweenLite.to(firstContainer.current, {
                position: 'fixed'
            });
        }
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
    const pageNation = () => {
        if(prevUrl.length === 0) {
            return (
                <ul>
                    <li onMouseEnter={mouseOn.bind(this)} onMouseLeave={mouseOut.bind(this)} className='active-link' ref={(e) => {e !== null && footerLinks.push(e)}}><a onClick={e => changePage(e, `/works/${nextUrl[0].url}`)}>next</a><span>next</span></li>
                </ul>
            )
        } else if(nextUrl.length === 0) {
            return (
                <ul>
                    <li onMouseEnter={mouseOn.bind(this)} onMouseLeave={mouseOut.bind(this)} className='active-link' ref={(e) => {e !== null && footerLinks.push(e)}}><a onClick={e => changePage(e, `/works/${prevUrl[0].url}`)}>prev</a><span>prev</span></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li onMouseEnter={mouseOn.bind(this)} onMouseLeave={mouseOut.bind(this)} ref={(e) => {e !== null && footerLinks.push(e)}}><a onClick={e => changePage(e, `/works/${prevUrl[0].url}`)}>prev</a><span>prev</span></li>
                    <li onMouseEnter={mouseOn.bind(this)} onMouseLeave={mouseOut.bind(this)} ref={(e) => {e !== null && footerLinks.push(e)}}><a onClick={e => changePage(e, `/works/${nextUrl[0].url}`)}>next</a><span>next</span></li>
                </ul>
            )
        }
    }
    return(
        <>
        <FirstConatiner ref={firstContainer}>
            <WorkImg ref={mainWorkImg} ><img src={imgUrl} alt={title} /></WorkImg>
            <MainInnerConatiner>
            <Title><span ref={mainTitle}>{title}</span></Title>
            </MainInnerConatiner>
            <ScrollDown ref={scrollDwon} href="#"><span></span></ScrollDown>
        </FirstConatiner>
        <SecondConatiner>
            <InnerConatiner ref={secondContainer} style={{backgroundColor:bgColor}}>
                <ul>
                    <li>
                        <ul>
                            <li><span ref={(e) => {e !== null && category.push(e)}}>{date}</span></li>
                            <li><span ref={(e) => {e !== null && category.push(e)}}>{develop}</span></li>
                            <li><span ref={(e) => {e !== null && category.push(e)}}>{useProgram}</span></li>
                            <li><span ref={(e) => {e !== null && category.push(e)}}>{project}</span></li>
                            <li>
                                <ul>
                                    {viewLink && <li><a href={viewLink} target='_blank'><span ref={(e) => {e !== null && category.push(e)}}>Visit the website</span></a></li>}
                                    {appleStore && <li><a href={viewLink} target='_blank'><span ref={(e) => {e !== null && category.push(e)}}>Visit the website</span></a></li>}
                                    {googlePlay && <li><a href={viewLink} target='_blank'><span ref={(e) => {e !== null && category.push(e)}}>Visit the website</span></a></li>}
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Text><span ref={projectDescription}>{description}</span></Text>
                    </li>
                </ul>
            </InnerConatiner>
            <InnerConatiner ref={thirdContainer}>
                <ProjectImgDiv ref={e => {e !== null && projectsImgDiv.push(e)}}><div ref={e => {e !== null && projectsImg.push(e)}}></div><img src={projectImg01} alt={title}/></ProjectImgDiv>
                <ProjectImgDiv ref={e => {e !== null && projectsImgDiv.push(e)}}><div ref={e => {e !== null && projectsImg.push(e)}}></div><img src={projectImg02} alt={title}/></ProjectImgDiv>
                <ProjectImgDiv ref={e => {e !== null && projectsImgDiv.push(e)}}><div ref={e => {e !== null && projectsImg.push(e)}}></div><img src={projectImg03} alt={title}/></ProjectImgDiv>
                {projectImg04 && <ProjectImgDiv className='last-project-img' ref={e => {e !== null && projectsImgDiv.push(e)}}><div ref={e => {e !== null && projectsImg.push(e)}}></div><img src={projectImg04} alt={title}/></ProjectImgDiv>}
            </InnerConatiner>
        </SecondConatiner>
        <FooterNav ref={footerNav}>
            {pageNation()}
        </FooterNav>
        </>
    )
};

export default WorkDetailComponent;