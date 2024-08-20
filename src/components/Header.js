import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { RiSearch2Line } from 'react-icons/ri';
import { navigation } from '../contents/navigation';
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/logo.png'

const Header = () => {
    const navigate = useNavigate()
    const location  = useLocation()
    const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
    const [searchInput, setsearchInput] = useState(removeSpace);
    
    
    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header className='fixed top-0 left-0 w-full h-16 bg-black bg-opacity-50 z-40'>
            <div className='container mx-auto px-10 flex items-center h-full relative'>
                <Link to={"/"}>
                    <img 
                        src={logo} // Add your logo URL here
                        alt='logo'
                        width={120}
                    />
                </Link>
            
                <nav className='hidden lg:flex items-center gap-1 ml-5'>
                    {navigation.map((nav, index) => (
                        <div key={nav.label}>
                            <NavLink 
                                to={nav.href} 
                                className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive ? 'text-neutral-100' : ''}`}
                            >
                                {nav.label}
                            </NavLink>
                        </div>
                    ))}
                </nav>

                <div className='ml-auto flex items-center gap-5'>
                    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e) => setsearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <Link to={"/search"}>
                        <button className='text-2xl text-white'>
                            <RiSearch2Line />
                        </button>
                        </Link>
                        
                    </form>
                    
                    <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                        <FaUserCircle className='w-full h-full' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
