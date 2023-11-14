import './animation.css'

const StudioAnimatedSquare = () => {
    return (
        <div
            data-aos="zoom-in-down"
            data-aos-duration="700"
            data-aos-offset="50"
            data-aos-easing="linear"
            className="xl:w-[420px] xl:h-[420px] lg:w-[380px] lg:h-[380px] md:w-[320px] md:h-[320px] w-[250px] h-[250px]">
            <div className="w-full h-full flex rotate-45 justify-center items-center relative">
                <div className="absolute w-full h-full bg-clip-content  borderAnimation"></div>
                <div className="w-[calc(100%-30px)] h-[calc(100%-30px)] border border-dotted flex justify-center items-center">
                    <div className="w-[calc(100%-60px)] h-[calc(100%-60px)] bg-white flex justify-center items-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioAnimatedSquare;