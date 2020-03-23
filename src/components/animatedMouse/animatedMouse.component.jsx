import React, { useState, useRef, useEffect } from 'react';
import { TweenLite } from 'gsap';
import { Cursor, Follower } from './animatedMouse.style';

var mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;
const AnimatedMouse = () => {
    const cursor = useRef(null);
    const follower = useRef(null);
    const [mouseToggle, setMouseToggle] = useState(false);
    const [animatedComp] = useState({
        cWidth:8,
        fWidth:40,
        delay:40
    });
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        mouseAction();
    },[]);
    const onMouseMove = e => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        TweenLite.to({}, 1, {
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / animatedComp.delay;
                posY += (mouseY - posY) / animatedComp.delay;
            }
          });
          TweenLite.to(follower.current, {
            css: {    
                left: posX - (animatedComp.fWidth / 2),
                top: posY - (animatedComp.fWidth / 2)
            }
        });
        TweenLite.to(cursor.current, {
            css: {    
                left: mouseX - (animatedComp.cWidth / 2),
                top: mouseY - (animatedComp.cWidth / 2)
            }
        });
      };
    const mouseAction = () => {
        var hoverLink = document.querySelectorAll('a');
        document.querySelector('.hamburger').addEventListener('mouseenter', () => {
            setMouseToggle(true);
          });
          document.querySelector('.hamburger').addEventListener('mouseleave', () => {
            setMouseToggle(false);
          });
        Array.from(hoverLink).forEach(link => {
          link.addEventListener('mouseenter', () => {
            setMouseToggle(true);
          });
          link.addEventListener('mouseleave', () => {
            setMouseToggle(false);
          });
          link.addEventListener('click', () => {
            setMouseToggle(false);
          });
      });
    }
    return (
        <>
            <Cursor className={`${mouseToggle? 'is-active' : '' } cursor`} ref={cursor} />
            <Follower className={`${mouseToggle? 'is-active' : '' } follower`} ref={follower} />
        </>
    )
}
export default AnimatedMouse;