import React from 'react';
import SettingsBlock from './SettingsBlock/SettingsBlock';
import SearchBlock from './SearchBlock/SearchBlock';
import {setSearchLocation} from '../../redux/actions'
import style from './header.module.scss';

const Header = () => {

    const searchHandler = (e) => {
        console.log('handler')
        e.preventDefault();
    }
    const submitForm = (e) => {
        e.preventDefault();
        console.log('value: ', e)
        // setSearchLocation(e.value);
    }

    return (
        <div className = {style.header}>
            <SettingsBlock/>
            <SearchBlock 
                handler = {searchHandler}
                submitForm = {submitForm}
            />
        </div>
    )
}

export default Header;