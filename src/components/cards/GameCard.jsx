import AnimatedSquare from "../AnimatedSquare";

const GameCard = ({isFlexReverse}) => {
    return (
        <div className={`flex ${isFlexReverse?'flex-row-reverse':''} lg:gap-10 items-center justify-center lg:px-20 mt-20 flex-wrap lg:flex-nowrap`}>
            <div className="lg:ml-10">
                <AnimatedSquare/>
            </div>
            <div className="space-y-4 text-white lg:ml-[80px] text-center lg:text-left w-4/5 lg:w-auto mt-20 lg:mt-0">
                <h1 className="text-[50px] font-Gobold">bus simulator bangladesh</h1>
                <p className="font-Messiri text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo ratione fugiat vel ea a consectetur est autem maiores eligendi in recusandae, doloribus, aut, suscipit reiciendis? Nam nisi eveniet veniam placeat cumque quis facilis unde perferendis error obcaecati magni eius odit voluptatem voluptas consectetur et necessitatibus, velit non officiis quidem!</p>
                <button className="bg-[#3F6CEE] font-semibold font-Messiri px-4 py-2 rounded-2xl flex justify-center items-center mx-auto lg:mx-0">Learn More</button>
            </div>
        </div>
    );
};

export default GameCard;