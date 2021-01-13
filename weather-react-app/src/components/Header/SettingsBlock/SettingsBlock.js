import Button from '../../common/Button/Button';
import speakerHandler from '../../../services/speakerHandler';
import styles from './settingsBlock.module.scss';

const SettingsBlock = () => {


    const buttonBackgroundHandler = () => {
    
    }
    const buttonSetFHandler = () => {
    
    }
    const buttonSpeakerHandler = () => {
        speakerHandler();
    }
    const buttonSetCHandler = () => {
    
    }
    return (
        <div className = {styles.block}>
            <Button add_class = 'button-update' handler = {buttonBackgroundHandler}/>
            <Button type_view = 'type_1001' handler = {buttonSetFHandler}>°F</Button>
            <Button type_view = 'type_0110' active disabled handler = {buttonSetCHandler}>°C</Button>
            <Button add_class = 'speaker' handler = {buttonSpeakerHandler}/>
        </div>
    )
}

export default  SettingsBlock;
