import { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#F9E0AE] ">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center lg:space-x-[250px] px-4 ">
                {/* logo */}
                <div className="flex items-center justify-between pt-4 lg:pt-0 ">
                    <Link href={"/"} className="flex items-center pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                            <path d="M6.327 15.2L19 22.8L38 11.4L19 0L0 11.4H19V15.2H6.327ZM0 15.2V30.4L3.8 26.182V17.48L0 15.2ZM19 38L9.5 32.3L5.7 30.02V18.62L19 26.6L32.3 18.62V30.02L19 38Z" fill="black" />
                        </svg>
                        <h1 className="text-[28px] lg:text-[40px] font-medium text-black font-[Jim Nightshade] ml-2">Educare</h1>
                    </Link>

                    {/* Hamburger menu button for small screens */}
                    <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <rect width="30" height="2" rx="1" fill="black" />
                            <rect y="7" width="30" height="2" rx="1" fill="black" />
                            <rect y="14" width="30" height="2" rx="1" fill="black" />
                            <rect y="21" width="30" height="2" rx="1" fill="black" />
                        </svg>
                    </div>
                </div>

                {/* Navbar links for large screens */}
                <ul className={`lg:flex  justify-between lg:justify-start lg:items-center gap-4 lg:gap-[56px] pt-4 lg:pt-6 pb-4 lg:pb-6 leading-9 md:leading-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <li> <Link className="font-[Poppins] text-lg lg:text-xl font-medium hover:text-[#c24914] transition-colors duration-300" href={"/"}>Home</Link> </li>
                    <li> <Link className="font-[Poppins] text-lg lg:text-xl font-medium hover:text-[#c24914] transition-colors duration-300" href={"/about"}>About</Link> </li>
                    <li className='hover:text-[#c24914] transition-colors duration-300'>
                        <Link className="font-[Poppins] text-lg lg:text-xl font-medium flex lg:justify-center items-center gap-2 " href={"/courses"}>Courses

                        </Link>
                    </li>
                    <li className='hover:text-[#c24914] transition-colors duration-300'>
                        <Link className="font-[Poppins] text-lg lg:text-xl font-medium flex lg:justify-center items-center gap-2 " href={"/blog"}>Blog

                        </Link>
                    </li>
                    <li className='my-4 md:my-0'> <Link className="font-[Poppins] text-lg lg:text-xl font-medium bg-[#c24914] rounded-xl text-white pt-1 pb-1.5 px-[18px] hover:bg-[#df4c0c] transition-all duration-300" href={"/"}>Contact us</Link> </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
