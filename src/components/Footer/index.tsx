import React from 'react';
import { ReactComponent as HeartSvg } from "./assets/heartIcon.svg";

import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.root}>
            Make with <HeartSvg style={{ fontSize: "20px", marginLeft: "10px" }} />
        </div>
    );
};

export default Footer;