import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TweenLite, Linear } from 'gsap';
import { Container } from '../../styles/base.style';
import { MainUl, WorkButton } from './home.style';
import Loading from '../../components/loading/loading.component';
import worksButton from '../../images/worksButton.svg';

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
    const [animatedComp] = useState({
        cWidth:8,
        fWidth:200,
        delay:40
    });
    useEffect(() => {
        TweenLite.to(workImg.current, 10,{rotation:"360", ease:Linear.easeNone, repeat:-1});
        homeContainer.current.addEventListener('mouseover', e => {
            document.addEventListener('mousemove', onMouseMove);
        });
        TweenLite.to(textSpan01.current, 0.5, {
            delay:1.5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(textSpan02.current, 0.5, {
            delay:2,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(textSpan03.current, 0.5, {
            delay:2.5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(textSpan04.current, 0.5, {
            delay:3,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(textSpan05.current, 0.5, {
            delay:3.5,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        TweenLite.to(textSpan06.current, 0.5, {
            delay:4,
            transform: "translateY(0%)",
            ease:Linear.easeNone
        });
        return() => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    },[]);
    const onMouseMove = e => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        if(mouseY > 170) {
            TweenLite.to({}, 1, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / animatedComp.delay;
                    posY += (mouseY - posY) / animatedComp.delay;
                }
              });
              TweenLite.to(workMouse.current, {
                left: posX - (animatedComp.fWidth / 2),
                right:'unset',
                top: posY - (animatedComp.fWidth / 2)
            });
        } else {
            TweenLite.to(workMouse.current, 1, {
                left: 0,
                right: 0,
                top: '-9rem'
              });
        }
      };
    return(
        <>
        <Loading />
        <Container className='home' ref={homeContainer}>
            <WorkButton className='workButton' to='/works' ref={workMouse}><img ref={workImg} src={worksButton}/></WorkButton>
            <MainUl>
                <li><span ref={textSpan01}>Hi! My  name is</span></li>
                <li ref={profile}><Link to='/profile'><span ref={textSpan02}>Yasuhio <br /> Katayama.</span></Link></li>
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