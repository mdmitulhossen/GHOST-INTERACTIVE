
import logo from '../../assets/logo.svg'
import navBg from '../../assets/Header.png'
import { Link } from 'react-scroll';
import './header.css'
import { useState } from 'react';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navScroll, setNavScroll] = useState(false);
    const menu = [
        { name: "Home", to: "home" },
        { name: "Games", to: "games" },
        { name: "Studio", to: "studio" },
        { name: "Contact", to: "contact" },
    ]

    const handleSetActive = (to) => {
        console.log(to)
        if (to !== 'test1') {
            const home = document.getElementById('home');
            home?.classList.remove('active');
        }
    };

    const handlewindowScroll = () => {
        if (window.scrollY >= 0) {
            setNavScroll(true)
        }
        else {
            setNavScroll(false)
        }
    }


    window.addEventListener('scroll', handlewindowScroll)
    return (
        <nav 
        style={{ backgroundImage: `url(${navBg})` }}
        className={`appContainer bg-cover drop-shadow-2xl shadow-xl  font-Messiri ${navScroll ? 'py-0' : 'py-2'} sticky top-0 w-full z-50 transition-all duration-0`}>
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
                <a
                    // style={{ backgroundImage: `url(${logo})` }}
                    href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-10 brightness-0 invert" alt="Logo" />
                </a>
                <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg lg:hidden  focus:outline-none" aria-controls="navbar-default">
                    <span className="sr-only">Open main menu</span>
                    {
                        menuOpen ? <span className='text-4xl text-white'><i className='bx bx-x'></i></span>
                            : <span className='text-4xl text-white'><i className='bx bx-menu' ></i></span>
                    }

                </button>
                <div className={`${menuOpen ? 'block' : 'hidden'} duration-300 transition-all  w-full lg:block lg:w-auto`} id="navbar-default">

                    <ul className="font-medium flex flex-col py-4 lg:p-0 mt-4  lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 space-y-3 lg:space-y-0 duration-200">


                        {
                            menu.map((item, index) => {
                                return (
                                    <li

                                        key={index}>
                                        <Link
                                            onClick={() => setMenuOpen(!menuOpen)}
                                            className='block py-1 px-3 text-white rounded-full lg:text-xl text-4xl cursor-pointer'

                                            activeClass="active"
                                            to={item.to}
                                            spy={true}
                                            smooth={true}
                                            // offset={50}
                                            duration={200}
                                            onSetActive={handleSetActive}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        {/* <Link

                            className='text-white active '
                            activeClass="active"
                            to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={200}
                            onSetActive={handleSetActive}
                        >
                            Test 1
                        </Link> */}



                        {/* <li>
                            <NavLink to="#h1" className="block py-2 px-3 text-white rounded text-2xl">Home</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;