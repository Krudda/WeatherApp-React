import {useDispatch, useSelector} from 'react-redux';

import Button from '../../common/Button/Button';
import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension} from '../../../redux/actions';

import styles from './settingsBlock.module.scss';

const SettingsBlock = () => {
    const dispatch = useDispatch();
    const  currentDimension = useSelector(state => state.tempDimension.tempDimension);
    const isActiveC = currentDimension === 'c' ? 'active': null;
    const isActiveF = currentDimension === 'f' ? 'active': null;

    const buttonBackgroundHandler = () => {
    
    }
    const buttonSetFHandler = () => {
        dispatch(setTempDimension('f'));
    }
    const buttonSetCHandler = () => {
        dispatch(setTempDimension('c'));
    }
    const buttonSpeakerHandler = () => {
        speakerHandler();
    }

    return (
        <div className = {styles.block}>
            <Button add_class = 'button-update' handler = {buttonBackgroundHandler}/>
            <Button type_view = 'type_1001' add_class = {isActiveF}handler = {buttonSetFHandler}>
                °F
            </Button>
            <Button type_view = 'type_0110' add_class = {isActiveC} handler = {buttonSetCHandler}>
                °C
            </Button>
            <Button add_class = 'speaker' handler = {buttonSpeakerHandler}/>
        </div>
    )
}

export default  SettingsBlock;
