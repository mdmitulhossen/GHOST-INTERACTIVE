import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import testGif from '../../assets/game.gif'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const getWindowSize = () => {
    const { innerWidth: width } = window;
    return width;
}

const Test = () => {
    const [isAnimation, setIsAnimation] = useState(true)
    const [windowSize, setWindowSize] = useState(getWindowSize());



    // const displayWidth = useRef(window.innerWidth)
    // console.log(displayWidth)
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize);
        if (windowSize < 800) { 
            setIsAnimation(false)
         }
         else{
            setIsAnimation(true)
         }
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    }, [windowSize])
    console.log(windowSize,isAnimation)
    if (!isAnimation) {
        return <div className="box">
            <div
                // ref={boxRef}
                className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 relative w-full border z-0"
            >
                <h1
                    style={{ backgroundImage: `url(${testGif})` }}
                    className="xl:text-[350px] box-c lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover z-0"
                >
                    ghost
                </h1>
                <p className="font-Messiri text-base md:text-xl text-center xl:w-4/6 lg:w-4/5 z-50 mx-auto text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi
                    exercitationem provident officia deleniti obcaecati maxime eaque nobis
                    minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi
                    quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis
                    fuga iusto iure maxime, molestias non accusantium temporibus? Rerum
                    voluptate pariatur nisi deserunt dolorem.
                </p>

            </div>
        </div>
    }

    return (
        <div className="box">
            <ScrollContainer>
                <ScrollPage>

                    <div
                        // ref={boxRef}
                        className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 relative w-full z-0 "
                    >
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <h1
                                style={{ backgroundImage: `url(${testGif})` }}
                                className="xl:text-[390px] box-c lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover z-0 lg:mt-[00px] xl:mt-0"
                            >
                                ghost
                            </h1>
                        </Animator>

                        <p className="font-Messiri text-lg md:text-xl text-center xl:w-4/6 lg:w-4/5 z-50 mx-auto text-white xl:mt-[580px] lg:mt-[400px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi
                            exercitationem provident officia deleniti obcaecati maxime eaque nobis
                            minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi
                            quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis
                            fuga iusto iure maxime, molestias non accusantium temporibus? Rerum
                            voluptate pariatur nisi deserunt dolorem.
                        </p>



                    </div>


                </ScrollPage>
            </ScrollContainer>
            {/* <div
                // ref={boxRef}
                className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 relative w-full border z-0"
            >
                <h1
                    style={{ backgroundImage: `url(${testGif})` }}
                    className="xl:text-[350px] box-c lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover z-0"
                >
                    ghost
                </h1>
                <p className="font-Messiri text-lg md:text-xl text-center xl:w-4/6 lg:w-4/5 z-50 mx-auto text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi
                    exercitationem provident officia deleniti obcaecati maxime eaque nobis
                    minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi
                    quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis
                    fuga iusto iure maxime, molestias non accusantium temporibus? Rerum
                    voluptate pariatur nisi deserunt dolorem.
                </p>

            </div> */}

        </div>
    );
};

export default Test;
