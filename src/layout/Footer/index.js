import React from 'react';
import Speech from 'react-speech';
import './index.css';

const Footer = () => {
    return (
    <>
        <span role = "footer" id="footer">

            &copy; ZAHRA MAHMOOD

            <div className="speech">
                <Speech text="thanks for checking out my portfolio" />
            </div>

        </span>
    </>
    )
}

export default Footer;
