import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import gsap from 'gsap'
import { Container, MainUl, WorkButton } from './home.style';
import Loading from '../../components/loading/loading.component';
import worksButton from '../../images/worksButton.svg';

import profileImage from '../../images/profile.jpg';

var mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;

const Home = () => {
    const homeContainer = useRef(null);
    const workMouse = useRef(null);
    const workImg = useRef(null);
    const profile = useRef(null);
    const textSpan01 = useRef(null);
    const textSpan02 = useRef(null);
    const textSpan03 = useRef(null);
    const textSpan04 = useRef(null);
    const textSpan05 = useRef(null);
    const textSpan06 = useRef(null);
    const profileImg = useRef(null);
    let clientWidth = document.getElementById('root').clientWidth;
    let history = useHistory();
    const [animatedComp] = useState({
        cWidth:178,
        fWidth:200,
        delay:40
    });
    useEffect(() => {
        gsap.to(workImg.current,{duration:10,rotation:"360", ease:'linear.easeNone', repeat:-1});
        if(clientWidth > 1025) {
            homeContainer.current.addEventListener('mouseover', e => {
                document.addEventListener('mousemove', onMouseMove);
            });
            onMouse();
        }
        gsap.to(textSpan01.current, {
            duration:0.5,
            delay:1.5,
            transform: "translateY(0%)",
        });
        gsap.to(textSpan02.current, {
            duration:0.5,
            delay:2,
            transform: "translateY(0%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan03.current, {
            duration:0.5,
            delay:2.5,
            transform: "translateY(0%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan04.current, {
            duration:0.5,
            delay:3,
            transform: "translateY(0%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan05.current, {
            duration:0.5,
            delay:3.5,
            transform: "translateY(0%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan06.current, {
            duration:0.5,
            delay:4,
            transform: "translateY(0%)",
            ease:'linear.easeNone'
        });
        return() => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    },[]);
    const changePage = (e, destination) => {
        e.preventDefault();
        gsap.to(profileImg.current, {
            duration:1,
            width:'0',
            ease:'linear.easeNone'
        });
        gsap.to(textSpan01.current, {
            duration:0.5,
            delay:1.2,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan02.current, {
            duration:0.5,
            delay:1,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan03.current, {
            duration:0.5,
            delay:0.8,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan04.current, {
            duration:0.5,
            delay:0.6,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan05.current, {
            duration:0.5,
            delay:0.5,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        gsap.to(textSpan06.current, {
            duration:0.5,
            transform: "translateY(-100%)",
            ease:'linear.easeNone'
        });
        setTimeout(() => {
          history.push(destination);
        }, 1800);
    };
    const onMouseMove = e => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        if(mouseY > 170) {
            gsap.to({}, 1, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / animatedComp.delay;
                    posY += (mouseY - posY) / animatedComp.delay;
                }
              });
              gsap.to(workMouse.current, {
                left: posX - (animatedComp.fWidth / 2),
                right:'unset',
                top: posY - (animatedComp.cWidth / 2)
            });
        } else {
            gsap.to(workMouse.current, 1, {
                left: 0,
                right: 0,
                top: '-9rem'
              });
        }
    };
    const onMouse = () => {
        profile.current.addEventListener('mouseenter', () => {
            gsap.to(profileImg.current, {
                duration:2,
                width:'100%',
                ease:'expo.easeInOut'
            });
            gsap.to(textSpan01.current, {
                duration:0.5,
                opacity: 0.6,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan03.current, {
                duration:0.5,
                opacity: 0.6,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan04.current, {
                duration:0.5,
                opacity: 0.6,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan05.current, {
                duration:0.5,
                opacity: 0.6,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan06.current, {
                duration:0.5,
                opacity: 0.6,
                ease:'linear.easeNone'
            });
            profile.current.addEventListener('mousemove', () => {
                gsap.to(profileImg.current, {
                    duration:1,
                    top: '10rem',
                    left: posX,
                    right: posX,
                    bottom:0,
                    margin: 'auto'
                });
            });
        });
        profile.current.addEventListener('mouseleave', () => {
            gsap.to(profileImg.current, {
                duration:1,
                width:0,
                ease:'expo.easeInOut'
            });
            gsap.to(textSpan01.current,{
                duration:0.5,
                opacity: 1,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan03.current,{
                duration:0.5,
                opacity: 1,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan04.current,{
                duration:0.5,
                opacity: 1,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan05.current,{
                duration:0.5,
                opacity: 1,
                ease:'linear.easeNone'
            });
            gsap.to(textSpan06.current,{
                duration:0.5,
                opacity: 1,
                ease:'linear.easeNone'
            });
        });
    }
    return(
        <>
        <Loading />
        <Container className='home' ref={homeContainer}>
            <WorkButton className='workButton' onClick={e => changePage(e, `/works`)} ref={workMouse}><img ref={workImg} src={worksButton}/></WorkButton>
            <MainUl>
                <li><span ref={textSpan01}>Hi! My  name is</span></li>
                <li ref={profile}><a onClick={e => changePage(e, `/profile`)}><span ref={textSpan02}>Yasuhio <br /> Katayama</span></a><a onClick={e => changePage(e, `/profile`)} ref={profileImg} className='profileImgLink'><img src={profileImage} /></a></li>
                <li><span ref={textSpan03}>Japanese Front-End</span></li>
                <li><span ref={textSpan04}>Developer.I’m based in</span></li>
                <li><span className='textCanada' ref={textSpan05}>canada</span></li>
                <li><span ref={textSpan06}>thank You!</span></li>
            </MainUl>
        </Container>
        </>
    )
}
export default Home;