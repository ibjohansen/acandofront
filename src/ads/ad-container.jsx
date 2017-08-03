import React from 'react';

import Ad1 from './ad1';
import Ad2 from './ad2';

const AdContainer = () => (
    <div className="main-container">
        <div className="background-sky-container">
            <div className="background-sky"></div>
        </div>
        <div className="background-stars-container">
            <div className="background-stars"></div>
        </div>
        <div className="background-man"></div>
        <Ad1 />
    </div>
);

export default AdContainer;