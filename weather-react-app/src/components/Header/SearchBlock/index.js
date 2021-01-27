import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSearchLocation} from '../../../redux/actions';
import Button from '../../common/Button';
import Mic from './Mic';
import LightTooltip from '../../common/Tooltip';

import styles from './searchBlock.module.scss';

const recognitionSupported = window.webkitSpeechRecognition || window.SpeechRecognition;

const SearchBlock = () => {
    const [searchCity, setSearchCity] = useState('');
    const [micActive, setMicActive] = useState(false);
    const voiceIsSynthesized =  useSelector(state => state.serviceStates.voiceSynthesizing);

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setSearchCity(e.target.value.toUpperCase());
    }

    const focusHandler = () => {
        setSearchCity('');
    }

    const voiceHandler  = () => {
        if (voiceIsSynthesized) return false;
        if (!recognitionSupported) {
            return false;
        }

        setMicActive (true);
        setSearchCity('listening...');

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = function (event) {
            console.log(event.results);
            const voiceCity = (event.results[0][0].transcript).toLowerCase();
            setSearchCity(voiceCity);
            dispatch(setSearchLocation(voiceCity));
        }

        recognition.onerror = function(event) {
            console.log(event)
            setSearchCity('');
            setMicActive (false);
        }

        recognition.onspeechend = function() {
            recognition.stop();
            setMicActive (false);
        };
        
        recognition.start();
    }

    const submitHandler  = (e) =>{
        e.preventDefault();
        const validCity = searchCity.trim().toLowerCase();
        if (validCity !== '') {
            dispatch(setSearchLocation(validCity));
        }
        setSearchCity('');
    }

    return (
        <div className = {styles.block}>
            <form className = {styles.form}>
            <LightTooltip title="input the city name">
                    <div>
                        <input 
                            className = {styles.input}
                            type = 'text' 
                            placeholder = 'search city'
                            onInput = {inputHandler}
                            value = {searchCity}
                            onFocus = {focusHandler}
                        />
                    </div>
                </LightTooltip>
                <LightTooltip title="search the weather">
                    <div>
                        <Button 
                            type_view = 'type_0110'  
                            handler = {submitHandler} 
                            type='submit' 
                            add_class = 'button-search'
                        >
                            search
                        </Button>
                    </div>
                </LightTooltip>
                { recognitionSupported && <Mic
                    active = {micActive}
                    handler = {voiceHandler}
                />}
            </form>
        </div>
    )
}

export default  SearchBlock;