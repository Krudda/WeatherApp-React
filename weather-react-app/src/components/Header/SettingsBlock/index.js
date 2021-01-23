import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../common/Button';
import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension, setMainBackground} from '../../../redux/actions';
import Spinner from '../../common/Spinner';

import styles from './settingsBlock.module.scss';

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
            <Button add_class = 'button-update' active = {imageLoading} handler = {buttonBackgroundHandler}>
                { imageLoading && <Spinner add_class = 'update'/> }
            </Button>
            <Button type_view = 'type_1001' active = {currentDimension === 'f'} handler = {buttonSetFHandler}>
                °F
            </Button>
            <Button type_view = 'type_0110' active = {currentDimension === 'c'} handler = {buttonSetCHandler}>
                °C
            </Button>
            <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
        </div>
    )
}

export default  SettingsBlock;
