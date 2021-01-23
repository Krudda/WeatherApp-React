import {useDispatch, useSelector}  from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWeather, setTempDimension, setSearchLocation } from './redux/actions';

import Header from './components/Header';
import Main from './components/Main';
import RSS from './components/RSS';
import Notification from './components/common/Notification';

// import getMainBackground from './services/getMainBackground'

import styles from './app.module.scss';


function App() {

  const image = useSelector(state => state.backgroundImage.mainBackgroundImage);
  const userLocation = useSelector(state => state.location.userLocation);
  const searchLocation = useSelector(state => state.location.searchLocation);
  const tempDimension = useSelector(state => state.tempDimension.tempDimension);
  const weather = useSelector(state => state.weather.weather);

  const dispatch = useDispatch();
  // dispatch(getRealUserLocation());
  // dispatch(setMainBackground());

  const weatherLocation = searchLocation.city !=='' ? searchLocation : userLocation;

  useEffect(() => {
    dispatch(getWeather(weatherLocation, tempDimension));
  }, [dispatch, weatherLocation, tempDimension]);

  useEffect(() => {
    console.log('Сработал useEffect 2 in App on weatherLocation')
    // dispatch(getRealUserLocation());
  }, [weatherLocation]);

  const backgroundImage = {
    background: `url(${image}) center center / cover no-repeat fixed`
  }

  const urlLocation = useLocation();

  useEffect(() => {
    const currentPath = urlLocation.pathname.slice(1);
    const searchParams = new URLSearchParams(currentPath);
    const city = searchParams.get('city');
    const temp_dim = searchParams.get('temp_dim');
    if (temp_dim && temp_dim  !== tempDimension) {
      dispatch(setTempDimension(temp_dim));
    }
    if (city && city !== weatherLocation.city) {
      dispatch(setSearchLocation(city));
    };
  }, [urlLocation]);

  return (
    <div className = {styles.container} style = {backgroundImage}>
      {!weather && <Notification />}
      
      { userLocation && weather &&
        <>
          <div className = {styles.wrapper}>
            <Header/>
            <Main />
          </div>
          <RSS />
        </>
      }
    </div>
  );
}

export default App;
