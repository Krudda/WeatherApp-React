import {useDispatch}  from 'react-redux';
import {getRealUserLocation} from './redux/actions';

import Header from './components/Header'
import Main from './components/Main'
import RSS from './components/RSS'

import styles from './app.module.scss';


function App() {

  const dispatch = useDispatch();
  dispatch(getRealUserLocation());

  const backgroundImage = {
    background: "url('https://images.unsplash.com/photo-1526422392024-1ff58f85bfb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMzg2ODF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=80&w=1080') center center / cover no-repeat fixed"
  }

  return (
    <div className = {styles.container} style = {backgroundImage}>
      <div className = {styles.wrapper}>
        <Header/>
        <Main />
      </div>
      <RSS />
    </div>
  );
}

export default App;
