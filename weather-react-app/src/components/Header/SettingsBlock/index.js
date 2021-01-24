import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension, setMainBackground} from '../../../redux/actions';
import Spinner from '../../common/Spinner';
// import Tooltip from '@material-ui/core/Tooltip';
// import { withStyles, } from '@material-ui/core/styles';
import LightTooltip from '../../common/Tooltip';

import styles from './settingsBlock.module.scss';

// const LightTooltip = withStyles((theme) => ({
//     tooltip: {
//       backgroundColor: theme.palette.common.white,
//       color: 'rgba(0, 0, 0, 0.87)',
//       boxShadow: theme.shadows[1],
//       fontSize: 11,
//     },
//   }))(Tooltip);

const SettingsBlock = () => {
    const dispatch = useDispatch();
    const  currentDimension = useSelector(state => state.tempDimension.tempDimension);
    const  imageLoading = useSelector(state => state.backgroundImage.isLoading);
    const [speakerActive, setSpeakerActive] = useState(false);
    
    const buttonBackgroundHandler = () => {
        dispatch(setMainBackground());
    }
    const buttonSetFHandler = () => {
        dispatch(setTempDimension('f'));
    }
    const buttonSetCHandler = () => {
        dispatch(setTempDimension('c'));
    }
    const buttonSpeakerHandler = () => {
        setSpeakerActive(true);
        speakerHandler(setSpeakerActive);
    }

    return (
        <div className = {styles.block}>
            <LightTooltip title="Change image">
                <div>
                <Button add_class = 'button_update' active = {imageLoading} handler = {buttonBackgroundHandler}>
                    { imageLoading ? 
                        <Spinner add_class = 'update'/>:
                        <span className = {styles.spinner} />}  
                </Button>
                </div>
            </LightTooltip>

            <LightTooltip title="Temperature in Fahrenheit">
                <div>
                    <Button type_view = 'type_1001' active = {currentDimension === 'f'} handler = {buttonSetFHandler}>
                        °F
                    </Button>
                </div>
            </LightTooltip>

            <LightTooltip title="Temperature in Celsius">
                <div>
                    <Button type_view = 'type_0110' active = {currentDimension === 'c'} handler = {buttonSetCHandler}>
                        °C
                    </Button>
                </div>
            </LightTooltip>
            <LightTooltip title="Speak the weather">
                <div>
                    <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
                </div>
            </LightTooltip>
        </div>
    )
}

export default  SettingsBlock;
