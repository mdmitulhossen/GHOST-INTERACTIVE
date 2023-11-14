import { useEffect, useState } from 'react';
import testGif from '../../assets/game2.gif'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky, } from "react-scroll-motion";
import { motion } from "framer-motion";


// // get window size
// const getWindowSize = () => {
//     const { innerWidth: width } = window;
//     return width;
// }


const InterractiveSection = () => {
    // const [isAnimation, setIsAnimation] = useState(true)
    // const [windowSize, setWindowSize] = useState(getWindowSize());

    // // resize and set window size
    // useEffect(() => {
    //     const handleWindowResize = () => {
    //         setWindowSize(getWindowSize())
    //     }

    //     window.addEventListener('resize', handleWindowResize);
    //     if (windowSize < 800) {
    //         setIsAnimation(false)
    //     }
    //     else {
    //         setIsAnimation(true)
    //     }
    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     }

    // }, [windowSize])


    // console.log(window.scrollY)


    // if (!isAnimation) {
    //     return (<div className="">
    //         <div
    //             className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 ">
    //             <h1
    //                 style={{ backgroundImage: `url(${testGif})` }}
    //                 className="xl:text-[180px] lg:text-[160px] md:text-[100px] text-[70px] font-bold font-Gobold text-transparent bg-clip-text bg-cover">INTERACTIVE</h1>
    //             <p className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi exercitationem provident officia deleniti obcaecati maxime eaque nobis minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi</p>

    //         </div>
    //     </div>)
    // }

    return (
        <div className=''>
            <ScrollContainer>
                <ScrollPage>
                    <div
                        className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10"
                    >
                        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity:1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    // ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 8,
                                        stiffness: 50,
                                        restDelta: 0.001
                                    }
                                }}
                                style={{ backgroundImage: `url(${testGif})` }}
                                className="xl:text-[180px] lg:text-[160px] md:text-[100px] text-[70px] font-bold font-Gobold text-transparent bg-clip-text bg-cover"
                            >
                                INTERACTIVE
                            </motion.h1>
                        </Animator>
                        <p className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">
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

    // return (
    //     <div className="">
    //         <div
    //             className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 ">
    //             <h1
    //                 style={{ backgroundImage: `url(${testGif})` }}
    //                 className="xl:text-[180px] lg:text-[160px] md:text-[100px] text-[70px] font-bold font-Gobold text-transparent bg-clip-text bg-cover">INTERACTIVE</h1>
    //             <p className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi exercitationem provident officia deleniti obcaecati maxime eaque nobis minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi</p>

    //         </div>
    //     </div>
    // );
};

export default InterractiveSection;