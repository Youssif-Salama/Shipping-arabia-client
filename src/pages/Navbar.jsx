import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import Button from '../common/Button';

const routes = [
    {
        name: "home",
        path: "/home"
    },
    {
        name: "Messages",
        path: "/inbox"
    },
    {
        name: "shipping",
        path: "/shipping"
    },
];

const NavbarComponent = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const token = localStorage.getItem("currentUserToken")
    return (
        <div className='navBar'>
            <Navbar fluid rounded>
                <Navbar.Brand href="/home">
                    <img src={logo} className="w-[126px]" alt="Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2 font-semibold">
                    {
                        token ? <div onClick={() => {
                            localStorage.removeItem("currentUserToken");
                            window.location.href("/home")
                        }}>
                            <Button content="Sign Out" textColor="#fff" bgColor="#F7A325" />
                        </div> : <>
                            <Link to="/login"><Button content="Login" textColor="#000" /></Link>
                            <Link to="/signup"><Button bgColor="#F7A325" content="Sign Up" /></Link>
                        </>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {routes.filter((item) => {
                        if (item.path === "/inbox" && !token) {
                            return false;
                        }
                        return true;
                    })
                        .map((item, index) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    className={`${isActive ? "border-b-2 border-orange-500 text-orange-500" : "text-black"} font-semibold capitalize`}
                                    key={item.name}
                                    to={item.path}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;



