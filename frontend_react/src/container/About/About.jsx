import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import { urlFor, client } from '../../client';

const About = ()  => {
    const [abouts, setAbouts] = useState([]);

    useEffect(_ => {
        const query = '*[_type == "abouts"]';
        client.fetch(query).then(data => setAbouts(data));
    }, []);
    

    return (
        <>
            <h2 className="head-text">
                I Know that&nbsp;
                <span>Good Development</span>
                <br />
                means&nbsp;
                <span>Good Business</span> 
            </h2>
            <div className="app__profiles tw-flex tw-justify-center tw-items-start tw-flex-wrap tw-mt-8">
                {abouts.map((about, index) => (
                    <motion.div
                        key={about.title + index}
                        whileHover={{ scale: 1.1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item tw-w-[190px] tw-flex tw-justify-start tw-items-start tw-flex-col tw-m-8 2xl:tw-w-[370px] 2xl:tw-mx-16 2xl:tw-my-8"
                    >
                         <img 
                            className="tw-w-full tw-h-[170px] tw-rounded-2xl tw-object-cover 2xl:tw-h-80" 
                            src={urlFor(about.imgUrl)} 
                            alt={about.title} 
                         />
                        <h2 className="bold-text tw-mt-5">{about.title}</h2>
                        <p className="p-text tw-mt-2.5">{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About, 'app__about tw-flex-1 tw-w-full tw-flex-col'), 
    'about',
    'tw-bg-white'
);