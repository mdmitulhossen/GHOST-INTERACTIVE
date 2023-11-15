import './animation.css'

const StudioAnimatedSquare = () => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in-out"
            data-aos-offset="10"
            data-aos-duration="500"
            className="xl:w-[420px] xl:h-[420px] lg:w-[380px] lg:h-[380px] md:w-[320px] md:h-[320px] w-[250px] h-[250px]">
            <div className="w-full h-full flex rotate-45 justify-center items-center relative">
                {/*add borderAnimation and border-2 border-dashed*/}
                <div className="absolute w-full h-full bg-clip-content borderAnimation "></div>
                <div className="w-[calc(100%-30px)] h-[calc(100%-30px)] border border-dotted flex justify-center items-center">
                    <div className="w-[calc(100%-60px)] h-[calc(100%-60px)] bg-[#CECECE] flex justify-center items-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudioAnimatedSquare;