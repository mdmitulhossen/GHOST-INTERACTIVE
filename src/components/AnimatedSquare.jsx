
import './animation.css'
const AnimatedSquare = () => {
    return (
        <div className="w-[220px] h-[220px] ">
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

export default AnimatedSquare;