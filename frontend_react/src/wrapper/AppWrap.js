import React from 'react';

import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames = '') => function HOC() {
    return (
        <div id={idName} className={`app__container tw-w-full tw-min-h-screen tw-flex tw-flex-row ${classNames}`}>
            <SocialMedia />
            <div className="app__wrapper tw-w-full tw-flex-col sm:tw-py-16 sm:tw-px-8 tw-pt-16 tw-px-4 tw-pb-8 app__flex">
                <Component />
                <div className="copyright tw-w-full tw-p-8 sm:tw-pt-8 tw-flex tw-flex-col tw-justify-end tw-items-end">
                    <p className="p-text">@2025 Carlos</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>
            <NavigationDots active={idName} />
        </div>
    );
}

export default AppWrap; 