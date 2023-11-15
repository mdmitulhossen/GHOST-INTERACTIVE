import Divider from "../divider/Divider";

const Title = ({ name }) => {
    return (
        <div
            data-aos="fade-down"
            data-aos-offset="100"
            // data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="bottom-bottom"
            className="inline-block space-y-3 z-30">
            <h1 className="xl:text-[120px] lg:text-[100px] md:text-[90px] text-[70px] font-bold font-Gobold text-white text-center">{name}</h1>
            <div className="w-full">
                <Divider />
            </div>
        </div>
    );
};

export default Title;