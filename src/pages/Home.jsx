import Navbar from "../components/Header/Navbar";
import bg from "../assets/bg.svg";
import { Element } from "react-scroll";
import HeaderSection from "./home/HeaderSection";
import Title from "../components/Header/Title";
import AnimatedSquare from "../components/AnimatedSquare";
import GameCard from "../components/cards/GameCard";


const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-no-repeat bg-cover bg-center pb-10 bg-[#1e1e1e] bg-blend-darken">
            <div className="">
                <Navbar />


                <div className="appContainer overflow-hidden">
                    <Element name="home" className="element">
                        <HeaderSection />
                    </Element>
                    <Element name="games" className="element mt-12 md:mt-20">
                        <div className="w-full flex justify-center">
                            <Title name='our games' />
                        </div>
                        <div className="mt-[100px]">
                            <GameCard isFlexReverse={false}/>
                        </div>
                        <div className="mt-[150px]">
                            <GameCard isFlexReverse={true}/>
                        </div>
                        <div className="mt-[150px]">
                            <GameCard isFlexReverse={false}/>
                        </div>
                    </Element>
                </div>
            </div>
        </div>
    );
};

export default Home;