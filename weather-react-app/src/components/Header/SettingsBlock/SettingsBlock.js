import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button/Button';
import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension} from '../../../redux/actions';
import Notification from '../../common/Notification';

import styles from './settingsBlock.module.scss';

const SettingsBlock = () => {
    const dispatch = useDispatch();
    const  currentDimension = useSelector(state => state.tempDimension.tempDimension);
    const isActiveC = currentDimension === 'c' ? 'active': null;
    const isActiveF = currentDimension === 'f' ? 'active': null;
    const [speakerActive, setSpeakerActive] = useState(false);
    const [errorRequest, setErrorRequest] = useState(false);

    const buttonBackgroundHandler = () => {
        errorRequest ? setErrorRequest(false) : setErrorRequest(true);
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
            {errorRequest && <Notification />}
            <Button add_class = 'button-update' handler = {buttonBackgroundHandler}/>
            <Button type_view = 'type_1001' add_class = {isActiveF} handler = {buttonSetFHandler}>
                °F
            </Button>
            <Button type_view = 'type_0110' add_class = {isActiveC} handler = {buttonSetCHandler}>
                °C
            </Button>
            <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
        </div>
    )
}

export default  SettingsBlock;
