import Divider from "../divider/Divider";

const Title = ({name}) => {
    return (
        <div className="inline-block space-y-3">
            <h1 className="xl:text-[120px] lg:text-[100px] md:text-[90px] text-[70px] font-bold font-Gobold text-white text-center">{name}</h1>
            <div className="w-full">
                <Divider />
            </div>
        </div>
    );
};

export default Title;