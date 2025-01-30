import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images, links } from '../../constants/';
import './Navbar.scss';


const Navbar = ()  => {
    const [toggle, setToggle] = useState(false);

    const handleOnClick = e => {
        e.stopPropagation();
        setToggle(prevState => !prevState);
      };

    return (
        <nav className="app__navbar tw-w-full tw-flex tw-justify-between tw-items-center tw-px-8 tw-backdrop-blur-sm tw-fixed tw-z-10">
            <div className="tw-flex tw-justify-start tw-items-center">
                <img className="tw-w-[100px] min-[2000px]:tw-w-[180px]" src={images.logo} alt="logo" />
            </div>
            <ul className="app__navbar-links tw-flex-1 tw-justify-center tw-items-center tw-flex max-[900px]:tw-hidden">
                {
                links.map((item) => (
                    <li key={`link-${item}`} className="app__flex p-text tw-mx-4 tw-cursor-pointer tw-flex-col">
                        <div className="tw-w-[5px] tw-h-[5px] tw-bg-transparent tw-rounded-full tw-mb-[5px] hover:tw-bg-secondary" />
                        <a href={`#${item}`} className="tw-no-underline tw-flex-col tw-uppercase tw-font-medium tw-text-gray hover:tw-text-secondary tw-transition-all tw-duration-300">{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu tw-w-[35px] tw-h-[35px] tw-rounded-full tw-relative min-[900px]:tw-hidden tw-flex tw-justify-center tw-items-center tw-bg-secondary">
                <HiMenuAlt4 onClick={ () => setToggle(true) } className="tw-h-[70%] tw-w-[70%] tw-text-white" />
                
                {toggle && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80%' }}
                        transition={ { duration: 0.85, ease: 'easeOut' } }
                        className="tw-fixed tw-top-0 tw-bottom-0 tw-right-0 tw-z-20 tw-p-4 tw-h-screen tw-flex tw-justify-end tw-items-end tw-flex-col"
                    >
                        <HiX onClick={ handleOnClick } className="tw-w-[35px] tw-h-[35px] tw-text-secondary tw-my-2 tw-mx-4" />
                            <ul className="tw-list-none tw-m-0 tw-p-0 tw-h-full tw-w-full tw-flex tw-content-start tw-items-start tw-flex-col">
                            {links.map((item) => (
                                <li key={item} className="tw-m-4">
                                    <a href={`#${item}`} 
                                        onClick={ handleOnClick }
                                        className="tw-text-gray tw-no-underline tw-text-base tw-uppercase tw-font-medium hover:tw-text-secondary tw-transition-all tw-duration-300"
                                    >{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;