import React, { useEffect, useState } from 'react';
import Footer from './pages/Footer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import NavbarComponent from './pages/Navbar';
import logo from "../src/assets/logo.png"

const Layout = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const navigate = useNavigate();



    const [loader, setLoader] = useState(true);
    useEffect(() => {
        pathname == "/" && navigate("/home")
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    }, [])


    return (
        <div>
            {
                loader ? <div className="flex items-center justify-center w-full h-[100vh]">
                    <div class="relative flex justify-center items-center">
                        <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#F7A325]"></div>
                        <img src={logo} class="rounded-full h-28 w-28 object-contain" />
                    </div>
                </div> :
                    <div>
                        <NavbarComponent />
                        <div className="min-h-[100vh]">
                            <Outlet></Outlet>
                        </div>
                        <Footer />
                    </div>
            }
        </div>
    );
}

export default Layout;
