import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

import speakerHandler from '../../../services/speakerHandler';
import {setTempDimension, setMainBackground, setVoiceSynthesis} from '../../../redux/actions';

import styles from './settingsBlock.module.scss';


const SettingsBlock = () => {
    const dispatch = useDispatch();
    const [speakerActive, setSpeakerActive] = useState(false);

    const  weather = useSelector(state => state.weather.weather);
    const timezone = weather.data ? weather.timezone : '';
    const weatherDesc = weather.data ? weather.data[0].weather.description : '';
    
    const buttonBackgroundHandler = () => {
        dispatch(setMainBackground(weatherDesc, timezone));
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

    const handlers = {
        buttonBackgroundHandler,
        buttonSetFHandler,
        buttonSetCHandler,
        buttonSpeakerHandler,
        speakerActive
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    const windowListener = ()  =>{
        setIsMobile((window.innerWidth < 700) );
    }

    useEffect(() => {
        window.addEventListener("resize", windowListener);
        return () => {window.removeEventListener("resize", windowListener)}
    }, [])

    return (
        <div className = {styles.block}>
            { isMobile ?
                <MobileMenu handlers = {handlers}/> : 
                <DesktopMenu  handlers = {handlers}/>
             }
        </div>
    )
}

export default  SettingsBlock;
