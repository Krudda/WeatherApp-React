import Button from '../../common/Button';
import styles from './settingsBlock.module.scss';

const buttonBackgroundHandler = () => {
    
}
const buttonSetFHandler = () => {

}
const buttonSetCHandler = () => {

}
const buttonSpeakerHandler = () => {
    alert('Speaker pushed')
}


const SettingsBlock = () => {
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