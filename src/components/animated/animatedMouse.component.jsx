import React, { useState, useRef, useEffect } from 'react';
import { TweenMax } from 'gsap';
import { Cursor, Follower } from './animatedMouse.style';

var mouseX = 0,
    mouseY = 0,
    posX = 0,
    posY = 0;
const AnimatedMouse = props => {
    const cursor = useRef(null);
    const follower = useRef(null);
    const [mouseToggle, setMouseToggle] = useState(false);
    const [animatedComp] = useState({
        cWidth:8,
        fWidth:40,
        delay:40,
        eY:0
    });
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove(cursor, follower));
        mouseAction();
        return () => {
            document.removeEventListener("mousemove", onMouseMove(cursor, follower));
          };
    },[]);
    const onMouseMove = (cursor, follower) => e => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        TweenMax.to({}, 1, {
            repeat: -1,
            onRepeat: function() {
                posX += (mouseX - posX) / animatedComp.delay;
                posY += (mouseY - posY) / animatedComp.delay;
                TweenMax.set(follower.current, {
                    css: {    
                        left: posX - (animatedComp.fWidth / 2),
                        top: posY - (animatedComp.fWidth / 2)
                    }
                });
                TweenMax.set(cursor.current, {
                    css: {    
                        left: mouseX - (animatedComp.cWidth / 2),
                        top: mouseY - (animatedComp.cWidth / 2)
                    }
                });
            }
          });
      };
      const mouseAction = () => {
        var hoverLink = document.querySelectorAll('a');
        Array.from(hoverLink).forEach(link => {
          link.addEventListener('mouseenter', () => {
            setMouseToggle(true);
          });
          link.addEventListener('mouseleave', () => {
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