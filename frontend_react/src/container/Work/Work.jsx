import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const filters = [
    'Web App', 'Desktop App', 'Mobile App', 'All'
];

const Work = ()  => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    useEffect(() => {
      const query = '*[_type == "works"]';
      client.fetch(query).then(data => {
        setWorks(data);
        setFilterWork(data);
      });
    }, [])

    const filterClass = (activeFilter, item) => activeFilter === item ? '!tw-bg-secondary !tw-text-white' : '';  

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);
        
        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if(item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter(work => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">
                My Creative&nbsp;
                <span>Portfolio Section</span>
            </h2>
            <div className="app__work-filter tw-flex tw-flex-row tw-content-start tw-items-center tw-flex-wrap tw-mt-16 tw-mb-8">
                {filters.map((item, index) => (
                <div
                    key={item + index}
                    className={ `app__work-filter-item tw-py-2 min-[2000px]:tw-py-4 tw-px-4 min-[2000px]:tw-px-8 tw-rounded-lg min-[2000px]:tw-rounded-[0.85rem] tw-bg-white !tw-text-black tw-font-extrabold tw-cursor-pointer tw-m-2 hover:tw-bg-secondary hover:!tw-text-white app__flex p-text ${ filterClass(activeFilter, item) }`}
                    onClick={ () => handleWorkFilter(item) }
                >
                    { item }
                </div>
                ))}
            </div>

            <motion.div
                animate={ animateCard }
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio tw-flex tw-flex-wrap tw-justify-center tw-items-center"
            >
                {/* TODO: Add Github API using urls, readmes and url. */}
                {/* TODO: Create Carrousel or slider to display several works. */}
                {filterWork.map((work, index) => 
                    <div 
                        className="app__work-item app__flex tw-w-[270px] tw-flex-col tw-m-8 tw-p-4 tw-rounded-lg tw-bg-white tw-text-black tw-cursor-pointer hover:tw-shadow-[0_0_25px_rgba(0,0,0,0.2)] min-[2000px]:tw-w-[470px] min-[2000px]:tw-p-5 min-[2000px]:tw-rounded-xl max-[300px]:tw-m-4" 
                        key={index}
                    >
                        <div className="app__work-img app__flex tw-w-full tw-h-[230px] min-[2000px]:tw-h-[350px] tw-relative">
                            <img className="tw-w-full tw-h-full tw-rounded-lg tw-object-cover" src={ urlFor(work.imgUrl)} alt={work.name} />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={ { opacity: [0, 1] } }
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-right-0 tw-w-full tw-h-full tw-bg-[rgba(0,0,0,0.5)] tw-rounded-lg tw-opacity-0"
                            >
                                {[ AiFillEye, AiFillGithub ].map((Icon, index) => (
                                    <a 
                                        href={ index === 0 ? work.projectLink : work.codeLink } 
                                        target="_blank" 
                                        rel="noreferrer"
                                        key={Icon + index}
                                        className="app__work-hover-item app__flex"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [ 0, 1 ] }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex tw-w-[50px] tw-h-[50px] tw-rounded-full tw-bg-[#00000080] tw-text-white tw-m-4 tw-font-extrabold tw-cursor-pointer"
                                        >
                                            <Icon className="tw-w-1/2 tw-h-1/2 tw-text-white" />
                                        </motion.div>
                                    </a>
                                ))}
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex tw-p-2 tw-w-full tw-relative tw-flex-col">
                            <h4 className="bold-text tw-mt-4 min-[2000px]:tw-mt-12 tw-text-base">{work.title}</h4>
                            <p className="p-text tw-mt-2.5">{work.description}</p>

                            <div className="app__work-tag app__flex tw-absolute tw-py-2 tw-px-4 tw-rounded-[10px] tw-bg-white tw-top-[-25px]">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Work, 'app__work tw-flex-1 tw-w-full tw-flex-col'), 
    'work'
);