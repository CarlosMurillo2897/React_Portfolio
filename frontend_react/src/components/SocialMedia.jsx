import React, { useEffect, useState } from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaUpwork } from 'react-icons/fa6';
import { client } from '../client';

const SocialMedia =  () => {

    const selectIcon = (icon, classNames) => {
        switch(icon) {
            case "BsGithub": return <BsGithub className={classNames} />;
            case "BsLinkedin": return <BsLinkedin className={classNames} />;
            case "FaUpwork": return <FaUpwork className={classNames} />;
            default: return <BsGithub className={classNames} />;
        }
    };

    const [socialMedias, setSocialMedias] = useState([]);
    
    useEffect(() => {
        const query = '*[_type == "socialMedia"]';
        client.fetch(query).then(
            data => setSocialMedias(data)
        );
    }, []);

    return (
        <div className="app__social max-[500px]:tw-hidden tw-flex tw-justify-end tw-items-center tw-flex-col tw-p-4">
            {socialMedias.map(media => 
                <a 
                    href={media.hyperlink} 
                    className="tw-w-10 min-[2000px]:tw-w-[70px] tw-h-10 min-[2000px]:tw-h-[70px] tw-rounded-[50%] tw-bg-white tw-my-1 min-[2000px]:tw-my-2 tw-mx-0 tw-border-solid tw-border tw-border-light-gray tw-flex tw-justify-center tw-items-center tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-bg-secondary hover:tw-border-secondary tw-group/social"
                >
                    { selectIcon(media.icon, "tw-w-[15px] tw-h-[15px] tw-text-gray group-hover/social:tw-text-white min-[2000px]:tw-w-[30px] min-[2000px]:tw-h-[30px]") }
                </a>
            )}
        </div>
    );
}

export default SocialMedia;