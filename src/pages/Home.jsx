import Navbar from "../components/Header/Navbar";
import bg from "../assets/bg.svg";


const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-no-repeat bg-cover bg-center h-screen bg-[#1e1e1e] bg-blend-darken">
            <div className="">
                <Navbar />
            </div>
        </div>
    );
};

export default Home;