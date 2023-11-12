
// import testGif from '../../assets/Rotating_earth.gif'
import testGif from '../../assets/game.gif'
import Divider from '../../components/divider/Divider';
const HeaderSection = () => {
    return (
        <div className="appContainer">
            <div
             className="flex flex-col justify-center items-center text-white gap-5 bg-no-repeat bg-cover bg-center pb-10 ">
                <h1
                style={{ backgroundImage: `url(${testGif})`}}
                 className="xl:text-[350px] lg:text-[280px] md:text-[200px] text-[130px] font-bold font-Gobold text-transparent bg-clip-text bg-cover">ghost</h1>
                <p className="font-Messiri text-lg md:text-xl  text-center xl:w-4/6 lg:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, animi exercitationem provident officia deleniti obcaecati maxime eaque nobis minima, cumque molestias ad dolorum, voluptatum eos tenetur eligendi quis veniam assumenda officiis repellendus quibusdam id! Quod veritatis fuga iusto iure maxime, molestias non accusantium temporibus? Rerum voluptate pariatur nisi deserunt dolorem.</p>

            </div>
        </div>
    );
};

export default HeaderSection;