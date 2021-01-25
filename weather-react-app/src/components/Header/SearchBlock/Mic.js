import {useSelector} from 'react-redux';
import classNames from 'classnames';
import LightTooltip from '../../common/Tooltip';

import styles from './searchBlock.module.scss';

const Mic = ({handler, active}) => {
    const voiceIsSynthesized =  useSelector(state => state.serviceStates.voiceSynthesizing);

    const title = voiceIsSynthesized ? 'please wait, voice is speaking..' : 'voice search';
   
    const classes = classNames(
        styles.button_mic, 
        active ? styles.active : false
    )

    return (
        <LightTooltip title={title}>
            <div className = {classes} onClick = {handler}></div>
        </LightTooltip>
    )
}

export default  Mic;