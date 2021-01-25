import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension, setMainBackground, setVoiceSynthesis} from '../../../redux/actions';
import Spinner from '../../common/Spinner';

import LightTooltip from '../../common/Tooltip';

import styles from './settingsBlock.module.scss';

const SettingsBlock = () => {
    const dispatch = useDispatch();
    const currentDimension = useSelector(state => state.serviceStates.tempDimension);
    const  imageLoading = useSelector(state => state.serviceStates.imageLoading);
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
        const disableSynthesis = () => {
            dispatch(setVoiceSynthesis(false));
        }
        setSpeakerActive(true);
        dispatch(setVoiceSynthesis(true))
        speakerHandler(setSpeakerActive, disableSynthesis);
    }

    return (
        <div className = {styles.block}>
            <LightTooltip title="change image">
                <div>
                <Button add_class = 'button_update' active = {imageLoading} handler = {buttonBackgroundHandler}>
                    { imageLoading ? 
                        <Spinner add_class = 'update'/>:
                        <span className = {styles.spinner} />}  
                </Button>
                </div>
            </LightTooltip>

            <LightTooltip title="temperature in Fahrenheit">
                <div>
                    <Button type_view = 'type_1001' active = {currentDimension === 'f'} handler = {buttonSetFHandler}>
                        °F
                    </Button>
                </div>
            </LightTooltip>

            <LightTooltip title="temperature in Celsius">
                <div>
                    <Button type_view = 'type_0110' active = {currentDimension === 'c'} handler = {buttonSetCHandler}>
                        °C
                    </Button>
                </div>
            </LightTooltip>
            <LightTooltip title="tell the weather">
                <div>
                    <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
                </div>
            </LightTooltip>
        </div>
    )
}

export default  SettingsBlock;
