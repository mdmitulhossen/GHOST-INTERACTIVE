import Navbar from "../components/Header/Navbar";
import bg from "../assets/bg.svg";
import {  Events, scrollSpy } from "react-scroll";
import HeaderSection from "./home/HeaderSection";
import Title from "../components/Header/Title";
import GameCard from "../components/cards/GameCard";
import StudioSection from "./home/StudioSection";
import testGif from '../assets/game.gif'
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import TextRevealAnimation from "../components/animation/TextRevealAnimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ScrollToTop } from "../components/ScrollToTop";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const [gameData, setGameData] = useState([])
    const [showMoreCount, setShowMoreCount] = useState(0)
    const gdata = useLoaderData()
    console.log(gameData)

    useEffect(() => {
        if (gdata?.length > 3) {
            setGameData(gdata.slice(0, 3))
        } else {
            setGameData(gdata)
        }
    }, [gdata])

    // handle show more game
    const handleShowMoreGame = (count) => {
        setGameData(gdata?.slice(0, 3 + count))
        setShowMoreCount(count)
    }
    // initialize AOS
    useEffect(() => {
        Aos.init();
    }, [])


    useEffect(() => {

        // Registering the 'begin' event and logging it to the console when triggered.
        Events.scrollEvent.register('begin', (to, element) => {
            console.log('begin', to, element);
        });

        // Registering the 'end' event and logging it to the console when triggered.
        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
        });

        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };


    }, []);


    // iteractive section box animation
    const interectiveBox = {
        hidden: { x: -20, y: -20, scale: 0.7 },
        vissible: { x: 0, y: 0, scale: 1 }
    }

    useEffect(() => {
        if (inView) {
            control.start("vissible");
        }
    }, [control, inView]);



    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className=" bg-blend-darken  bg-contain bg-[#1e1e1e] w-full">
            <div className="relative">
                <ScrollToTop />
                <Navbar />

                <div

                    className="appContainer overflow-hidden">
                    {/* <HeaderSection /> */}
                    <div
                        name="home"
                        className="element">
                        <HeaderSection />
                    </div>

                    {/* name="games" */}
                    <div name="games" className="element pt-12 md:pt-20 lg:pt-[100px]">
                        <TextRevealAnimation />
                        <div className="w-full flex justify-center">
                            <Title name='our games' />
                        </div>

                        {
                            gameData && gameData?.map((game, index) => {
                                return (
                                    <div key={index} className="mt-16">
                                        <GameCard
                                            isFlexReverse={index % 2 === 0 ? false : true}
                                            data={game}
                                        />
                                    </div>
                                )
                            })
                        }

                        <div className="lg:mt-[150px] mt-[100px] w-full flex justify-center">
                            <button
                                onClick={() => handleShowMoreGame(showMoreCount + 1)}
                                className="appBtn px-6 py-2 rounded-full">
                                <span className="inline-block mt-[3px]">Show More</span>
                            </button>
                        </div>
                    </div>



                    <div name="studio" className="element mt-12 md:mt-0 lg:pt-[50px] ">

                        <div className="lg:mt-0 mt-[100px]">
                            <StudioSection />
                        </div>

                    </div>

                    {/* INTERACTIVE and contact*/}
                    {/* name="contact" */}
                    <div className="element mt-12 md:mt-0 appContainer overflow-hidden lg:pt-10">

                        <div
                            ref={ref}
                            className="mt-[50px] relative">
                            <div className="">
                                <div
                                    className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 ">
                                    <motion.h1
                                        variants={interectiveBox}
                                        initial="hidden"
                                        animate={control}
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
                                        className="xl:text-[180px] lg:text-[160px] md:text-[100px] text-[70px] font-bold font-Gobold text-transparent bg-clip-text bg-cover">
                                        INTERACTIVE
                                        {/* <TextRevealAnimation text="INTERACTIVE" /> */}
                                    </motion.h1>
                                    <p
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-easing="linear"
                                        data-aos-offset="20"
                                        data-aos-duration="500"
                                        className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi exercitationem provident officia deleniti obcaecati maxime eaque nobis minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi</p>

                                </div>
                            </div>



                        </div>


                        <div name="contact" className="pt-20">
                            <div className="w-full flex justify-center">
                                <Title name='stay updated' />
                            </div>
                            <div className="text-lg w-full text-center text-white mt-16 flex justify-center font-Messiri">
                                <p
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-offset="50"
                                    data-aos-easing="linear"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="xl:w-3/5 md:w-4/5">

                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo ratione fugiat vel ea a consectetur est autem maiores eligendi in recusandae, doloribus, aut, suscipit reiciendis? Nam nisi eveniet veniam placeat cumque quis facilis unde perferendis error obcaecati magni eius odit voluptatem voluptas consectetur et necessitatibus, velit non officiis quidem!
                                    {/* <TextRevealAnimation
                                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo ratione fugiat vel ea a consectetur est autem maiores eligendi in recusandae, doloribus, aut, suscipit reiciendis? Nam nisi eveniet veniam placeat cumque quis facilis unde perferendis error obcaecati magni eius odit voluptatem voluptas consectetur et necessitatibus, velit non officiis quidem!"
                                    /> */}
                                </p>
                            </div>

                            <div className="font-Messiri flex gap-2 md:gap-5 w-full mt-10 justify-center">
                                <input
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-offset="20"
                                    data-aos-duration="500"
                                    data-aos-anchor-placement="bottom-bottom"
                                    type="text" placeholder="Email Address" className="border bg-white pl-2 pr-2 md:pl-6 md:pr-4 py-1  md:py-3 md:min-w-[300px] focus:outline-0 rounded-l-full rounded-r-lg" />
                                <button
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-offset="20"
                                    data-aos-duration="500"
                                    data-aos-anchor-placement="bottom-bottom"
                                    className="appBtn px-2 py-1 md:px-4 md:py-3 rounded-r-full md:min-w-[150px]">
                                    <span className="inline-block mt-[3px]">Sign Up</span>

                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="md:mt-[150px] mt-[100px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;