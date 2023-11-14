import Navbar from "../components/Header/Navbar";
import bg from "../assets/bg.svg";
import { Element } from "react-scroll";
import HeaderSection from "./home/HeaderSection";
import Title from "../components/Header/Title";
import GameCard from "../components/cards/GameCard";
import StudioSection from "./home/StudioSection";
import testGif from '../assets/game.gif'
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import TextRevealAnimation from "../components/animation/TextRevealAnimation";


const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-no-repeat bg-cover bg-center bg-[#1e1e1e] bg-blend-darken">
            <div className="">
                <Navbar />

                <div className="appContainer overflow-hidden">
                    <Element name="home" className="element">
                        <HeaderSection />
                    </Element>
                    <Element name="games" className="element mt-12 md:mt-20">
                        <TextRevealAnimation/>
                        <div className="w-full flex justify-center">
                            <Title name='our games' />
                        </div>
                        <div className="mt-[100px]">
                            <GameCard isFlexReverse={false} />
                        </div>
                        <div className="mt-[150px]">
                            <GameCard isFlexReverse={true} />
                        </div>
                        <div className="mt-[150px]">
                            <GameCard isFlexReverse={false} />
                        </div>
                    </Element>
                    <Element name="studio" className="element mt-12 md:mt-20">

                        <div className="lg:mt-[200px] mt-[100px]">
                            <StudioSection />
                        </div>

                    </Element>

                    {/* INTERACTIVE and contact*/}
                    <Element name="contact" className="element mt-12 md:mt-20 appContainer overflow-hidden">

                        <div className="mt-[50px]">
                            <div className="">
                                <div
                                    className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 ">
                                    <h1
                                        style={{ backgroundImage: `url(${testGif})` }}
                                        className="xl:text-[180px] lg:text-[160px] md:text-[100px] text-[70px] font-bold font-Gobold text-transparent bg-clip-text bg-cover">INTERACTIVE</h1>
                                    <p className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi exercitationem provident officia deleniti obcaecati maxime eaque nobis minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi</p>

                                </div>
                            </div>
                        </div>


                        <div className="mt-20">
                            <div className="w-full flex justify-center">
                                <Title name='stay updated' />
                            </div>
                            <div className="text-lg w-full text-center text-white mt-16 flex justify-center font-Messiri">
                                <p className="xl:w-3/5 md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quaerat quidem aperiam nam distinctio fugiat fugit, qui voluptatum eum laudantium impedit nihil inventore laboriosam sapiente hic repellat, deleniti tempora quod voluptates animi minus labore? Vero, optio voluptate ea iure magnam, vitae quia quidem odio nobis quod dolore obcaecati hic corporis mollitia qui voluptatibus harum adipisci omnis quis cum, tenetur aspernatur!</p>
                            </div>

                            <div className="font-Messiri flex gap-2 md:gap-5 w-full mt-10 justify-center">
                                <input type="text" placeholder="Email Address" className="border bg-white pl-6 pr-4  py-3 md:min-w-[300px] focus:outline-0 rounded-l-full rounded-r-lg" />
                                <button className="appBtn px-4 py-3 rounded-r-full md:min-w-[150px]">Sign Up</button>
                            </div>
                        </div>



                    </Element>

                </div>

                <div className="mt-[150px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;