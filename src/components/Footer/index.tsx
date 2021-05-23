import React from 'react';
import cn from "classnames";
import { ReactComponent as HeartSvg } from "./assets/heartIcon.svg";

import s from './Footer.module.scss';

type Props = {
    className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(s.root, className)}>
            Make with <HeartSvg style={{ fontSize: "20px", marginLeft: "10px" }} />
        </div>
    );
};

export default Footer;