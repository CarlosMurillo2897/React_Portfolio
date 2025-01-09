import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 1, ease: 'easeInOut' }
};

const techs = [ images.flutter, images.redux, images.sass ];

const Header = ()  => {
    return (
        <div id="home" className="app__header tw-flex-1 tw-w-full tw-h-full tw-flex-col xl:tw-flex-row tw-pt-24 2xl:tw-pt-32 sm:tw-pb-0 tw-pb-8 sm:tw-px-8 tw-px-4 app__flex">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                // max-width: 2000px for tw-w-full & tw-mr-0
                className="tw-flex-[0.65] tw-flex tw-flex-col tw-justify-start tw-items-start tw-h-full tw-w-full tw-mr-0"
            >
                <div className="tw-w-full tw-flex  tw-flex-col tw-justify-start tw-items-start">
                    <div className="badge-cmp tw-flex-row app__flex">
                        <span className="tw-text-5xl 2xl:tw-text-8xl">👋</span>
                        <div className="tw-ml-5">
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Carlos</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex tw-flex-col tw-mt-12">
                        <p className="p-text">Web Developer</p>
                        <p className="p-text">Backend Developer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                children={{ duration: 0.5 }}
                className="app__header-img tw-flex-1 tw-h-full tw-flex tw-justify-end tw-items-end tw-relative max-xl:tw-my-8"
            >
                <img src={images.profile} alt="profile_bg" className="tw-w-full tw-object-contain tw-z-[1]" />
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="overlay_circle tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-z-0 tw-w-full tw-h-[90%]"
                    src={images.circle}
                    alt="profile_circle"
                />
            </motion.div>
            <motion.div
                variants={ scaleVariants }
                className="app__header-circles tw-flex-[0.7] tw-flex tw-flex-col tw-justify-evenly tw-items-start tw-h-full max-xl:tw-w-full max-xl:tw-flex-row max-xl:tw-flex-wrap max-xl:tw-ml-0"
            >
                {techs.map((circle, index) => (
                    <div className="circle-cmp app__flex tw-w-[100px] tw-h-[100px] tw-rounded-full tw-bg-white max-xl:tw-m-4" key={`circle-${index}`}>
                        <img className="tw-w-3/5 tw-h-3/5" src={circle} alt="circle" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default Header;