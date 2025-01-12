import React from 'react'

import { links } from '../constants';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation tw-hidden sm:tw-flex tw-justify-center tw-items-center tw-flex-col tw-p-4">
        {links.map((item, index) => (
                <a href={`#${item}`} 
                    key={item + index}
                    className={ `app__navigation-dot tw-w-2.5 2xl:tw-w-5 tw-h-2.5 2xl:tw-h-5 tw-rounded-full tw-m-2 tw-transition-colors tw-duration-200 tw-ease-in-out
                      hover:tw-bg-secondary ${ active === item ? 'tw-bg-secondary' : 'tw-bg-[#cbcbcb]' }
                    ` }
                />
        ))}
    </div>
  )
}

export default NavigationDots;