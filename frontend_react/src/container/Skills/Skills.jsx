import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const applyBgColor = bgColor => bgColor === undefined ? 'tw-bg-primary' : `!tw-bg-[${bgColor}]`;

const Skills = ()  => {

    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
          const query = '*[_type == "experiences"]';
          const skillsQuery = '*[_type == "skills"]';

          client.fetch(query).then(data => {
            setExperience(data);
          });
          client.fetch(skillsQuery).then(data => {
            setSkills(data);
          });
        }, [])

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container tw-w-4/5 tw-mt-12 tw-flex tw-flex-row max-md:tw-w-full max-md:tw-flex-col">
                <motion.div className="app__skills-list tw-flex-1 tw-flex tw-flex-wrap tw-content-start tw-items-start tw-mr-20 max-md:tw-mr-0 max-md:tw-content-center max-md:tw-items-center">
                    {skills?.map(skill => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex tw-flex-col tw-text-center tw-m-4 2xl:tw-my-4 2xl:tw-mx-8"
                            key={skill.name}
                        >
                            <div className={`app__flex tw-w-[70px] sm:tw-w-[90px] 2xl:tw-w-[150px] tw-h-[70px] sm:tw-h-[90px] 2xl:tw-h-[150px] tw-rounded-full ${applyBgColor(skill.bgColor)}`}>
                                {/* TODO: Replace images with Icons. */}
                                <img src={urlFor(skill.icon).url()} alt={skill.name} className="tw-w-3/6 tw-h-3/6" />
                            </div>
                            <p className="p-text tw-font-medium tw-mt-2 2xl:tw-mt-4">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp tw-flex-1 tw-flex tw-justify-start tw-items-start tw-flex-col max-md:tw-mt-8">
                    {experience?.map((experience) => (
                        <motion.div 
                        className="app__skills-exp-item tw-w-full tw-flex tw-flex-row tw-justify-start tw-items-start tw-my-4 tw-mx-0"
                        key={experience.year}
                        >
                            <div className="app__skills-exp-year tw-mr-12">
                                <p className="bold-text tw-font-extrabold !tw-text-secondary max-sm:tw-mr-4">{experience.year}</p>
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
                                            <h4 className="bold-text tw-font-medium">{work.name}</h4>
                                            <p className="p-text tw-font-normal tw-text-gray tw-mt-[5px]">{work.company}</p>
                                        </motion.div>
                                        {/* TODO: Display Tooltip by using a circle interrogation mark icon. */}
                                        <Tooltip
                                            id={work.name}
                                            effect="solid"
                                            style={{ 'max-width': '300px', 'box-shadow': '0 0 25px rgba(0,0,0,0.1)', 'padding': '1rem', 'text-align': 'center', 'line-height': '1.5' }}
                                            border={ 5 }
                                            opacity={ 1 }
                                            arrowColor="#fff"
                                            className="skills-tooltip !tw-bg-white !tw-text-gray 2xl:!tw-text-[1.75rem] 2xl:!tw-max-w-[500px]"
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