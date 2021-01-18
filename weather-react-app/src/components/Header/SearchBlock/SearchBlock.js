import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {setSearchLocation} from '../../../redux/actions';
import Button from '../../common/Button/Button';
import styles from './searchBlock.module.scss';


const SearchBlock = ({}) => {
    const [searchCity, setSearchCity] = useState('');

    const dispatch = useDispatch();

    const inputHandler = (e) => {
        setSearchCity(e.target.value.toUpperCase());
    }

    const submitHandler  = (e) =>{
        e.preventDefault();
        const validCity = searchCity.trim();
        if (validCity !== '') {
            dispatch(setSearchLocation(validCity));
        }
        setSearchCity('');
    }

    return (
        <div className = {styles.block}>
            <form className = {styles.form}>
                <input 
                    className = {styles.input}
                    type = 'text' 
                    placeholder = 'search city'
                    onInput = {inputHandler}
                    value = {searchCity}
                />
                <Button 
                    type_view = 'type_0110'  
                    handler = {submitHandler} 
                    type='submit' 
                    add_class = 'button-search'
                    >
                        search
                    </Button>
                <div className = {styles.button_mic}></div>
            </form>
        </div>
    )
}

export default  SearchBlock;