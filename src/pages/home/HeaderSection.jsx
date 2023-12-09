import { useEffect, useState } from 'react';
import testGif from '../../assets/game2.gif'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import { motion } from "framer-motion";


// get window size
const getWindowSize = () => {
    const { innerWidth: width } = window;
    return width;
}



const HeaderSection = () => {
    const [isAnimation, setIsAnimation] = useState(true)
    const [windowSize, setWindowSize] = useState(getWindowSize());

    // resize and set window size
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize);
        if (windowSize < 800) {
            setIsAnimation(false)
        }
        else {
            setIsAnimation(true)
        }
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }

    }, [windowSize])



    if (!isAnimation) {
        return (
            <div
                className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 w-full z-20 pt-0 h-screen"
            >
                <h1

                    style={{ backgroundImage: `url(${testGif})` }}
                    className="xl:text-[350px] box-c lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover z-0"
                >
                    ghost
                </h1>
                <p className="font-Messiri text-base md:text-xl text-center xl:w-3/6 lg:w-3/5 z-0 mx-auto text-white w-4/5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi
                    exercitationem provident officia deleniti obcaecati maxime eaque nobis
                    minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi
                    quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis
                    fuga iusto iure maxime, molestias non accusantium temporibus? Rerum
                    voluptate pariatur nisi deserunt dolorem.
                </p>

            </div>
        )
    }

    return (
        <div className=' pt-0 h-screen '>
            <ScrollContainer>
                <ScrollPage>
                    <div
                        className="flex flex-col items-center justify-end  text-white gap-5 bg-no-repeat bg-cover bg-center relative w-full z-0  h-full"
                    >
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <motion.h1

                                initial={{ y: -2000, scale: 0.5 }}
                                animate={{ y: 0, scale: 1 }}
                                transition={{
                                    duration: 1,
                                    // ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 3,
                                        stiffness: 50,
                                        restDelta: 0.001
                                    }
                                }}
                                style={{ backgroundImage: `url(${testGif})` }}
                                className="2xl:text-[390px] xl:text-[320px] lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover z-0  lg:mt-[0px] xl:mt-0"
                            >
                                ghost
                            </motion.h1>
                        </Animator>
                        <p className="font-Messiri text-lg md:text-xl text-center xl:w-3/6 lg:w-4/5 z-50 mx-auto text-white xl:mt-[580px] lg:mt-[400px] ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi
                            exercitationem provident officia deleniti obcaecati maxime eaque nobis
                            minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi
                            quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis
                            fuga iusto iure maxime, molestias non accusantium temporibus? Rerum
                            voluptate pariatur nisi deserunt dolorem.
                        </p>
                    </div>
                </ScrollPage>

            </ScrollContainer >
        </div >
    );
};

export default HeaderSection;