import {useDispatch, useSelector}  from 'react-redux';
import {getRealUserLocation, setMainBackground, getWeather} from './redux/actions';

import Header from './components/Header'
import Main from './components/Main'
import RSS from './components/RSS'

// import getMainBackground from './services/getMainBackground'

import styles from './app.module.scss';


function App() {

  const image = useSelector(state => state.backgroundImage.mainBackgroundImage);
  const location = useSelector(state => state.userLocation.userLocation);
  const tempDimension = useSelector(state => state.tempDimension.tempDimension);

  const dispatch = useDispatch();
  // dispatch(getRealUserLocation());
  // dispatch(setMainBackground());

  dispatch(getWeather(location, tempDimension));

  const backgroundImage = {
    background: `url(${image}) center center / cover no-repeat fixed`
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
