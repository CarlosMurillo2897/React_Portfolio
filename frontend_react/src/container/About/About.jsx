import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
    { title: 'Full Stack', description: 'It\'s the position I enjoy the most.', imageUrl: images.about01 }, 
    { title: 'Web Developer', description: 'I work with stylings, Components and Accessibility.', imageUrl: images.about02 },
    { title: 'Backend Developer', description: 'Most of the time I\'ve been working using NET', imageUrl: images.about03 },
    { title: 'RPA Developer', description: 'I\'ve experience working with UiPath and BluePrism.', imageUrl: images.about04 },
];

const About = ()  => {
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
                        className="app__profile-item tw-w-48 tw-flex tw-justify-start tw-items-start tw-flex-col tw-m-8 2xl:tw-w-96 2xl:tw-mx-16 2xl:tw-my-8"
                    >
                         <img 
                            className="tw-w-full tw-h-44 tw-rounded-2xl tw-object-cover 2xl:tw-h-80" 
                            src={about.imageUrl} 
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

export default About;