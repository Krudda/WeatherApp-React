import React from 'react';
import SettingsBlock from './SettingsBlock';
import SearchBlock from './SearchBlock';
import style from './header.module.scss';

const Header = () => {
    return (
        <div className = {style.header}>
            <SettingsBlock/>
            <SearchBlock/>
        </div>
    )
}

export default Header;