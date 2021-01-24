import classNames from 'classnames';
import LightTooltip from '../../common/Tooltip';

import styles from './searchBlock.module.scss';

const Mic = ({handler, active}) => {
   
    const classes = classNames(
        styles.button_mic, 
        active ? styles.active : false
    )

    return (
        <LightTooltip title="Voice search">
            <div className = {classes} onClick = {handler}></div>
        </LightTooltip>
    )
}

export default  Mic;