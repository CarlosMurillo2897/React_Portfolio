import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaUpwork } from 'react-icons/fa6';

const SocialMedia =  () => {
    return (
        <div className="app__social tw-hidden sm:tw-flex tw-justify-end tw-items-center tw-flex-col tw-p-4">
            <a href="https://github.com/CarlosMurillo2897/">
                <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/carlos-mb/">
                <BsLinkedin />
            </a>
            <a href="https://www.upwork.com/freelancers/~01cc2f5d6f814bf25b">
                <FaUpwork />
            </a>
        </div>
    );
}

export default SocialMedia;