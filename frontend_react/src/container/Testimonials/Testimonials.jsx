import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; 

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonials.scss';

const Testimonials = ()  => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => setCurrentIndex(index);

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then(data => {
            setTestimonials(data);
        });
        client.fetch(brandsQuery).then(data => {
            setBrands(data);
        });
    }, []);

    const current = testimonials[currentIndex];

    return (
        <>
        {testimonials.length && (
            <>
            <div className="app__testimonial-item app__flex tw-w-3/5 max-[850px]:tw-w-full tw-min-h-80 min-[2000px]:tw-min-h-[450px] tw-bg-white tw-flex tw-flex-row max-[600px]:tw-flex-col tw-p-8 tw-rounded-[15px]">
                <img src={urlFor(current.imgUrl)} alt="testimonials" className="tw-w-[100px] tw-h-[100px] tw-rounded-[50%] tw-object-cover min-[2000px]:tw-w-[150px] min-[2000px]:tw-h-[150px]" />
                <div className="app__testimonial-content tw-flex-1 tw-h-full tw-py-0 tw-px-8 tw-text-left tw-flex tw-flex-col tw-justify-around tw-items-start max-[600px]:tw-mt-8 max-[600px]:tw-p-0">
                    <p className="p-text !tw-text-xl !tw-text-black min-[2000px]:!tw-text-[2rem]">{current.feedback}</p>
                    <div>
                        {/* TODO: Review classes defined in App.scss file, important it's required in some cases. */}
                        <h4 className="bold-text !tw-font-semibold !tw-text-secondary tw-mt-8">{current.name}</h4>
                        <h5 className="p-text tw-font-normal !tw-text-gray tw-mt-[5px]">{current.company}</h5>
                    </div>
                </div>
            </div>
            <div className="app__testimonial-btns app__flex tw-flex-row tw-mt-4">
                <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                    <HiChevronLeft />
                </div>
                <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                    <HiChevronRight />
                </div>
            </div>
            </>
        )}
            <div className="app__testimonials-brands app__flex tw-w-4/5 max-[800px]:tw-w-full tw-flex-wrap tw-mt-8">
                {brands.map(brand => (
                    <motion.div
                        whileInView={{ opacity: [0,1 ] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                        className="tw-w-[150px] max-[450px]:tw-w-[120px] min-[2000px]:tw-w-[210px] tw-m-6 max-[450px]:tw-m-4 min-[2000px]:tw-m-8 tw-group/item "
                    >
                        <img src={urlFor(brand.imgUrl)} alt={brand.name} className="tw-w-full tw-h-auto tw-object-cover tw-grayscale group-hover/item:tw-grayscale-0" />
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Testimonials, 'app__testimonials tw-flex-1 tw-w-full tw-flex-col'),
    'testimonials'
);