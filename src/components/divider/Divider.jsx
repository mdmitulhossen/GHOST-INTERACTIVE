

const Divider = () => {
    return (
        <div className="flex items-center w-3/5 mx-auto">
            <div className="w-full h-[1px] bg-[#959595]"></div>
            <div className="xl:w-[50px] w-[35px] h-[35px] flex-shrink-0 flex-grow xl:h-[50px] bg-[#1E1E1E] border-[1px] border-[#959595] rounded-full flex justify-center items-center">
                <div className="xl:w-[20px] xl:h-[20px] w-[15px] h-[15px] bg-white rotate-45">

                </div>
            </div>
            <div className="w-full h-[1px] bg-[#959595]"></div>
        </div>
    );
};

export default Divider;