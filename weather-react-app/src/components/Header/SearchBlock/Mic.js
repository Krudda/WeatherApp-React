import classNames from 'classnames';

import styles from './searchBlock.module.scss';

const Mic = ({handler, active}) => {
   
    const classes = classNames(
        styles.button_mic, 
        active ? styles.active : false
    )

    return (
        <div 
            className = {classes} 
            onClick = {handler}
        ></div>
    )
}

export default  Mic;