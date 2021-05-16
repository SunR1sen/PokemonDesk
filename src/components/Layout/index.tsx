import React, {ReactNode} from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

type Props = {
    children: ReactNode;
    className?: string;
}

const Layout: React.FC<Props> = ({ children, className = null }) => (
    <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;