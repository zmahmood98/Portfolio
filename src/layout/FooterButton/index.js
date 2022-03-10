import React from 'react';
import Speech from 'react-speech';
import './index.css';

const FooterButton = () => {
    return (
    <>
        <div className="speech">
            <Speech onClick={console.log("it worked")} text="thanks for checking out my portfolio" />
        </div> 
    </>
    )
}

export default FooterButton;
