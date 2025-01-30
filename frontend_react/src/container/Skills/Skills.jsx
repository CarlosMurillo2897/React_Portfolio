import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import { BsQuestionCircle } from 'react-icons/bs';

const applyBgColor = bgColor => bgColor === undefined ? '' : `!tw-bg-[${bgColor}]`;

const Skills = ()  => {

    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
          const query = '*[_type == "experiences"]';
          const skillsQuery = '*[_type == "skills"] | order(priority desc)';

          client.fetch(query).then(data => {
            setExperience(data);
          });
          client.fetch(skillsQuery).then(data => {
            setSkills(data);
          });
        }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container tw-w-4/5 tw-mt-12 tw-flex tw-flex-row max-[900px]:tw-w-full max-[900px]:tw-flex-col">
                <motion.div className="app__skills-list tw-flex-1 tw-flex tw-flex-wrap tw-content-start tw-items-start tw-mr-20 max-[900px]:tw-mr-0 max-[900px]:tw-content-center max-[900px]:tw-items-center">
                    {skills?.map(skill => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex tw-flex-col tw-text-center tw-m-4 min-[2000px]:tw-my-4 min-[2000px]:tw-mx-8"
                            key={skill.name}
                        >
                            <div className={`app__flex max-[450px]:tw-w-[70px] tw-w-[90px] min-[2000px]:tw-w-[150px] max-[450px]:tw-h-[70px] tw-h-[90px] min-[2000px]:tw-h-[150px] tw-rounded-full tw-bg-primary ${applyBgColor(skill.bgColor)}`}>
                                {/* TODO: Replace images with Icons. */}
                                <img src={urlFor(skill.icon).url()} alt={skill.name} className="tw-w-3/6 tw-h-3/6" />
                            </div>
                            <p className="p-text tw-font-medium tw-mt-2 min-[2000px]:tw-mt-4">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp tw-flex-1 tw-flex tw-justify-start tw-items-start tw-flex-col max-[900px]:tw-mt-8">
                    {experience?.map((experience) => (
                        <motion.div 
                        className="app__skills-exp-item tw-w-full tw-flex tw-flex-row tw-justify-start tw-items-start tw-my-4 tw-mx-0"
                        key={experience.year}
                        >
                            <div className="app__skills-exp-year tw-mr-12 max-[450px]:tw-mr-4">
                                <p className="bold-text tw-font-extrabold !tw-text-secondary">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works tw-flex-1">
                                {experience.works?.map((work) => (
                                    <React.Fragment key={work.name}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work tw-flex tw-flex-col tw-content-start tw-items-start tw-mb-4 tw-cursor-pointer"
                                            data-tooltip-id={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text tw-font-medium tw-flex tw-flex-row tw-items-center">
                                                {work.name}
                                                <BsQuestionCircle className="tw-ms-2 tw-text-xs tw-rounded-full" />
                                            </h4>
                                            <p className="p-text tw-font-normal tw-text-gray tw-mt-[5px]">{work.company}</p>
                                        </motion.div>
                                        <Tooltip
                                            id={work.name}
                                            effect="solid"
                                            style={{ maxWidth: '300px', boxShadow: '0 0 25px rgba(0,0,0,0.1)', 'padding': '1rem', textAlign: 'center', lineHeight: '1.5' }}
                                            border={ '5px' }
                                            opacity={ 1 }
                                            arrowColor="#fff"
                                            className="skills-tooltip !tw-bg-white !tw-text-gray min-[2000px]:!tw-text-[1.75rem]/[2rem] min-[2000px]:!tw-max-w-[500px]"
                                        >
                                            {work.desc}
                                        </Tooltip>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills, 'app__about tw-flex-1 tw-w-full tw-flex-col'), 
    'skills',
    'tw-bg-white'
);