import AnimatedSquare from "../AnimatedSquare";
import TextRevealAnimation from "../animation/TextRevealAnimation";

const GameCard = ({ isFlexReverse, data }) => {
    const { title, description, imgURL, LearnMoreLink } = data || {};
    return (
        <div className={`flex ${isFlexReverse ? 'flex-row-reverse' : ''} lg:gap-10 items-center justify-center xl:px-[100px] lg:px-[40px] mt-20 flex-wrap lg:flex-nowrap`}>
            <div className="lg:ml-10">
                <AnimatedSquare imageURL={imgURL} />
            </div>
            <div className="space-y-4 text-white lg:ml-[80px] text-center lg:text-left w-4/5 lg:w-auto mt-20 lg:mt-0">
                <h1
                    data-aos="fade-down"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-easing="linear"
                    data-aos-offset="50"
                    data-aos-duration="500"
                    className="text-[50px] font-Gobold">{title?.toLowerCase()}</h1>
                <p
                    data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="10"
                    data-aos-duration="500"
                    className="font-Messiri text-lg">
                    {/* <TextRevealAnimation
                        text={description}
                    /> */}
                    {description}
                </p>
                <button className="appBtn rounded-2xl mx-auto lg:mx-0">
                    <span className="inline-block mt-[2px]">Learn More</span>
                </button>
            </div>
        </div>
    );
};

export default GameCard;