import Button from '../../common/Button';
import styles from './searchBlock.module.scss';


const SearchBlock = ({handler, submitForm}) => {
    return (
        <div className = {styles.block}>
            <form className = {styles.form} onSubmit = {submitForm}>
                <input 
                    className = {styles.input}
                    type = 'text' 
                    placeholder = 'search city'
                />
                <Button 
                    type_view = 'type_0110'  
                    handler = {handler} 
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