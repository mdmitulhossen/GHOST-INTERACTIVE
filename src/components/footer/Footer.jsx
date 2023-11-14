
const Footer = () => {
    return (
        <div className="border-t-2 border-[#ddddff]">
            <div className="appContainer flex justify-center lg:justify-between py-8 items-center flex-wrap lg:flex-nowrap space-y-5 lg:space-y-0">
                <div>
                    <ul className="text-white text-sm xl:text-lg font-semibold font-Messiri flex items-center gap-5">
                        <li
                            data-aos="zoom-out"
                            data-aos-duration="200"
                            data-aos-offset="10"
                            data-aos-delay='10' 
                            data-aos-easing="linear"
                        ><a href="">
                                <span className="mr-1 inline-block"><i className='bx bx-copyright'></i></span>
                                GHOST INTERACTIVE
                            </a></li>
                        <li
                            data-aos="zoom-out"
                            data-aos-duration="200"
                            data-aos-offset="15"
                            data-aos-delay='100'
                             data-aos-easing="linear"
                        ><a href="">
                                ALL RIGHTS RESERVED
                            </a></li>
                        <li
                            data-aos="zoom-out"
                            data-aos-duration="200"
                            data-aos-offset="20"
                            data-aos-delay='200' 
                            data-aos-easing="linear"
                        ><a href="">
                                PRIVACY POLICY
                            </a></li>
                        <li
                            data-aos="zoom-out"
                            data-aos-duration="200"
                            data-aos-offset="10"
                            data-aos-delay='300' 
                            data-aos-easing="linear"
                        ><a href="">
                                CONTACT US
                            </a></li>
                    </ul>
                </div>
                {/* right side contact us */}
                <div className="text-white text-sm xl:text-lg font-semibold font-Messiri flex gap-5 items-center ">
                    <p
                        data-aos="zoom-out"
                        data-aos-duration="200"
                        data-aos-offset="10"
                        data-aos-delay='400'
                        data-aos-easing="linear"
                    >CONTACT US</p>
                    <span
                    data-aos="zoom-out"
                    data-aos-duration="200"
                    data-aos-offset="10"
                    data-aos-delay='500'
                    data-aos-easing="linear"
                     className="border border-white rounded-full text-lg xl:text-2xl lg:px-2 px-1 py-2 flex justify-center items-center w-10 cursor-pointer hover:bg-[#3F6CEE] hover:border-[#3F6CEE] duration-200">
                        <i className='bx bxl-facebook'></i>
                    </span>
                    <span 
                    data-aos="zoom-out"
                    data-aos-duration="200"
                    data-aos-offset="10"
                    data-aos-delay='600'
                    data-aos-easing="linear"
                    className="border border-white rounded-full text-lg xl:text-2xl lg:px-2 px-1 py-2 flex justify-center items-center w-10 cursor-pointer hover:bg-[#3F6CEE] hover:border-[#3F6CEE] duration-200">
                        <i className='bx bxl-instagram' ></i>
                    </span>
                    <span 
                    data-aos="zoom-out"
                    data-aos-duration="200"
                    data-aos-offset="10"
                    data-aos-delay='700'
                    data-aos-easing="linear"
                    className="border border-white rounded-full text-lg xl:text-2xl lg:px-2 px-1 py-2 flex justify-center items-center w-10 cursor-pointer hover:bg-[#3F6CEE] hover:border-[#3F6CEE] duration-200">
                        <i className='bx bxl-linkedin' ></i>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Footer;