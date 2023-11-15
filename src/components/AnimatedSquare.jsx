
import './animation.css'
const AnimatedSquare = () => {
    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-in-out"
            data-aos-offset="0"
            data-aos-duration="500"
            className="w-[220px] h-[220px] ">
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

export default AnimatedSquare;