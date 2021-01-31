import {useState} from 'react';
import {useSelector} from 'react-redux';

import Button from '../../common/Button';
import Spinner from '../../common/Spinner';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@material-ui/core/styles';

import styles from './settingsBlock.module.scss';

const MenuUI = styled(Menu)({
    '& .MuiPaper-rounded': {
        padding: '0 10px',
        borderRadius: '5px',
        border: '1px solid #292929',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        maxHeight: 'calc(100% - 65px)'
    }
});

const MobileMenu = ({handlers}) => {

    const {buttonBackgroundHandler, buttonSetFHandler, buttonSetCHandler, buttonSpeakerHandler, speakerActive} = handlers;
    const currentDimension = useSelector(state => state.serviceStates.tempDimension);
    const  imageLoading = useSelector(state => state.serviceStates.imageLoading);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button add_class = 'menu' handler = {handleClick}/>
            <MenuUI
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Button add_class = 'button_update' active = {imageLoading} handler = {buttonBackgroundHandler}>
                        { imageLoading ? 
                            <Spinner add_class = 'update'/>:
                            <span className = {styles.spinner} />}  
                    </Button>
                    </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div>
                        <Button type_view = 'type_1100' active = {currentDimension === 'f'} handler = {buttonSetFHandler}>
                            °F
                        </Button>
                        <Button type_view = 'type_0011' active = {currentDimension === 'c'} handler = {buttonSetCHandler}>
                            °C
                        </Button>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
                </MenuItem>
            </MenuUI>
        </>
    )
}

export default MobileMenu;