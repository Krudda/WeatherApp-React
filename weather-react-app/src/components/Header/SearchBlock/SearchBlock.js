import styles from './searchBlock.module.scss';


const SearchBlock = () => {
    return (
        <div className = {styles.block}>
            <form className = {styles.form}>
                <input 
                    className = {styles.input}
                    type = 'text' 
                    placeholder = 'search city'
                />
                <button type='submit' className = {styles.button}>
                    search
                </button>
                <div className = {styles.button_mic}></div>
            </form>
            {/* <form>
                <input type="text" placeholder="search city">
                    <button type="submit">search</button>
                    <div id="button-voice"></div>
            </form> */}
        </div>
    )
}

export default  SearchBlock;