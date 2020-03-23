import React, {
    useEffect,
    useRef
} from 'react';
import Loading from '../loading/loading.component';

import { TweenLite, Linear, Expo} from 'gsap';
import ScrollMagic from 'scrollmagic';

import { Title, Text, ScrollDown } from '../../styles/base.style';
import { FirstContainer, ProfileImg, SecondContainer, AboutContent } from './profile.style';

import profile from '../../images/profile.jpg';

const ProfileComponent = ({circleRed}) => {
    const profileImg = useRef(null);
    const mainTitle = useRef(null);
    const mainText = useRef(null);
    const profileDiv = useRef(null);
    const secondContainer = useRef(null);
    const aboutDiv = useRef(null);
    const aboutTitle = useRef(null);
    const aboutUl = useRef(null);
    const scrollDwon = useRef(null);
    let aboutMe = [];
    const controller = new ScrollMagic.Controller();

    useEffect(() => {
        scroll();
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
        TweenLite.to(circleRed.current, 2, {
            delay: 4,
            transform: 'scale(0.8)',
            zIndex:'-5',
            ease: Expo.easeInOut
        });
        TweenLite.to(scrollDwon.current, 1, {
            delay:5.2,
            opacity: 1,
        });
    });
    const scroll = () => {
        new ScrollMagic.Scene({
            triggerElement: profileImg.current
            }).on("enter", function (event) {  
                TweenLite.to(profileImg.current, 1, {
                    width: '60rem',
                    ease: Expo.easeInOut
                });
                TweenLite.to(aboutTitle.current, 1, {
                    transform: "translateY(0%)"
                });
                TweenLite.to(aboutMe[0], 1, {
                    delay:1,
                    transform: "translateY(0%)"
                });
                TweenLite.to(aboutMe[1], 1, {
                    delay:1.2,
                    transform: "translateY(0%)"
                });
                TweenLite.to(aboutMe[2], 1, {
                    delay:1.4,
                    transform: "translateY(0%)"
                });
            }).on("leave", function (event) { 
                TweenLite.to(profileImg.current, 1, {
                    width: 0
                });
                TweenLite.to(aboutTitle.current, 1, {
                    transform: "translateY(100%)"
                });
                aboutMe.map(abMe => {
                    TweenLite.to(abMe, 1, {
                        transform: "translateY(100%)"
                    });
                });
            }).setClassToggle(profileImg.current, "active").addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: aboutDiv.current
        }).setClassToggle(aboutDiv.current, 'active').addTo(controller);
    }
    return (
        <>
            <Loading />
            <FirstContainer>
                <div>
                    <Title><span ref={mainTitle}>yasuhiro katayama</span></Title>
                    <Text><span ref={mainText}>Front-End Developer<br />based in Canada.</span></Text>
                </div>
                <ScrollDown ref={scrollDwon} href="#"><span></span></ScrollDown>
            </FirstContainer>
            <SecondContainer ref={secondContainer}>
                <section>
                    <div ref={profileDiv}>
                        <ProfileImg ref={profileImg}>
                            <img src={profile} />
                        </ProfileImg>
                    </div>
                    <AboutContent ref={aboutDiv}>
                        <Title><span ref={aboutTitle}>about me</span></Title>
                        <ul ref={aboutUl}>
                            <li><span ref={(e) => {e !== null && aboutMe.push(e)}}>I’m Yasuhiro Katayama, I’m a Front-End Developer based in Canada. I’ve been working as a Web Development for 5 years. I’m an experienced developer from Japan who studied Web Development at Cornerstone International Community College of Canada.</span></li>
                            <li><span ref={(e) => {e !== null && aboutMe.push(e)}}>In Vancouver, I have been working as a freelance Full Stack Web Developer on a variety of projects. I have been dedicated to learning ReactJs, Redux, NodeJs and MongoDB to fulfill client needs and to broaden my horizons. With my perseverance, I was able to pick up the knowledge of these frameworks quickly.</span></li>
                            <li><span ref={(e) => {e !== null && aboutMe.push(e)}}>In Japan, I have worked as a Web Developer position for 4 years at many different companies such as Medical Center, Banking and Beauty salon Group. I gained much experience in Javascript, Java, jQuery and PHP (WordPress). During my time at these companies, I was able to remodel and reorganize the websites to provide users with a smoother and more comfortable experience. Through these experiences, I also had the opportunities to work in many different teams. By working in these teams, I truly learned that communication is an essential component in development.</span></li>
                        </ul>
                    </AboutContent>
                </section>
            </SecondContainer>
        </>
    )
}

export default ProfileComponent;