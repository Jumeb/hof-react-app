import React from 'react';

import styles from './Activity.module.css'

const Activity = (props) => {
    const {size} = props;

    return <div className={styles.spinner2} style={{transform: `scale(${size})`}}><div></div><div></div><div></div><div></div></div>

}

export default Activity;
