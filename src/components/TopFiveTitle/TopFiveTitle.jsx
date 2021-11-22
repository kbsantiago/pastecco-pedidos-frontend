import React from 'react';
import { TOP_FIVE_CONSTANTS } from './TopFiveTitleConstants';

const TopFiveTitle = () => {
    return (
        <div id={TOP_FIVE_CONSTANTS.ID}>
            <h2>{TOP_FIVE_CONSTANTS.NAME}</h2>
        </div>
    );
};

export default TopFiveTitle;