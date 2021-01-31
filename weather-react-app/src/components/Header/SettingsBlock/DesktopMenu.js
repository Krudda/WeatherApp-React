import {useSelector} from 'react-redux';

import Button from '../../common/Button';
import Spinner from '../../common/Spinner';


import LightTooltip from '../../common/Tooltip';


import styles from './settingsBlock.module.scss';

const DesktopMenu = ({handlers}) => {
    const {buttonBackgroundHandler, buttonSetFHandler, buttonSetCHandler, buttonSpeakerHandler, speakerActive} = handlers;
    const currentDimension = useSelector(state => state.serviceStates.tempDimension);
    const  imageLoading = useSelector(state => state.serviceStates.imageLoading);

    return (
        <>
            <LightTooltip title="change image">
                <div>
                <Button add_class = 'button_update' active = {imageLoading} handler = {buttonBackgroundHandler}>
                    { imageLoading ? 
                        <Spinner add_class = 'update'/>:
                        <span className = {styles.spinner} />}  
                </Button>
                </div>
            </LightTooltip>

            <div className = {styles.temp_settings}>
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
            </div>

            <LightTooltip title="tell the weather">
                <div>
                    <Button add_class = 'speaker' active= {speakerActive} handler = {buttonSpeakerHandler}/>
                </div>
            </LightTooltip>
        </>
    )
}

export default DesktopMenu;