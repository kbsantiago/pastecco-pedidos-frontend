import React from 'react';
import { WRAPPER_CONSTANTS, CSS_IDS, IMAGE_SOURCE } from './WrapperConstants';

const Wrapper = () => {
    return (
        <div id={CSS_IDS.WRAPPER}>
            <div id={CSS_IDS.APT}>
                <h1>{WRAPPER_CONSTANTS.TITLE}</h1>
                <p>{WRAPPER_CONSTANTS.TEXT}</p>
            </div>
            <div id={CSS_IDS.IMAGE}>
                <img src={IMAGE_SOURCE} alt=""/>
            </div>
        </div>
    );
}

export default Wrapper;