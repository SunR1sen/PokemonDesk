import React from 'react';
import cn from 'classnames';

import './custom.css';
import styles from './App.modules.scss';

const App = () => {
    return (
        <div className={cn(styles.header, "color")}>
            This is App component!
        </div>
    )
}

export default App;