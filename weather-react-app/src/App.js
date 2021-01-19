import {useDispatch, useSelector}  from 'react-redux';
import { useEffect } from 'react';
import { getWeather } from './redux/actions';

import Header from './components/Header'
import Main from './components/Main/index'
import RSS from './components/RSS'

// import getMainBackground from './services/getMainBackground'

import styles from './app.module.scss';


function App() {

  const image = useSelector(state => state.backgroundImage.mainBackgroundImage);
  const userLocation = useSelector(state => state.location.userLocation);
  const searchLocation = useSelector(state => state.location.searchLocation);
  const tempDimension = useSelector(state => state.tempDimension.tempDimension);

  const dispatch = useDispatch();
  // dispatch(getRealUserLocation());
  // dispatch(setMainBackground());

  const weatherLocation = searchLocation.city !=='' ? searchLocation : userLocation;

  useEffect(() => {
    dispatch(getWeather(weatherLocation, tempDimension));
  }, [dispatch, weatherLocation, tempDimension]);

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
