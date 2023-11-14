
import Title from "../../components/Header/Title";
import StudioAnimatedSquare from "../../components/StudioAnimatedSquare";
import TextRevealAnimation from "../../components/animation/TextRevealAnimation";


const StudioSection = () => {
    return (
        <div className="flex gap-10 lg:gap-10 items-center justify-between lg:px-10 lg:mt-20 flex-wrap lg:flex-nowrap">
            <div className="space-y-4 text-white lg:mr-[80px] text-center lg:text-left lg:w-4/5   lg:mt-0 xl:px-[100px] lg:px-[40px]">
                <div className="mb-10 flex justify-center lg:justify-start w-full">
                    <Title name='our studio' />
                </div>
                <p
                    data-aos="zoom-out-down"
                    data-aos-duration="500"
                    data-aos-offset="50"
                    data-aos-easing="linear"
                    className="font-Messiri xl:text-[55px] lg:text-[50px] md:text-[40px] text-[32px] lg:w-4/5">Our story starts with the
                    question, “What if we did
                    this differently?”</p>
                <p className="font-Messiri text-lg lg:w-4/5">

                    <TextRevealAnimation
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    />

                </p>
                <button className="appBtn rounded-2xl mx-auto lg:mx-0">
                    <span className="inline-block mt-[3px]">Learn More</span>
                   
                </button>
            </div>
            <div className="lg:ml-10 relative flex justify-center w-full lg:w-auto">
                <div className="lg:absolute lg:-right-[200px] lg:-top-[200px] w-full lg:w-auto flex justify-center items-center mt-[100px] lg:mt-0 pb-20 lg:pb-0">
                    <StudioAnimatedSquare />
                </div>
            </div>
        </div>
    );
};

export default StudioSection;