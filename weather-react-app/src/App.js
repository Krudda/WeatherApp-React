import {useDispatch, useSelector}  from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getWeather, setTempDimension, 
  setSearchLocation, getRealUserLocation, 
  setMainBackground } from './redux/actions';

import Header from './components/Header';
import Main from './components/Main';
import RSS from './components/RSS';
import Notification from './components/common/Notification';


import styles from './app.module.scss';


function App() {

  const image = useSelector(state => state.backgroundImage.mainBackgroundImage);
  const userLocation = useSelector(state => state.location.userLocation);
  const searchLocation = useSelector(state => state.location.searchLocation);
  const tempDimension = useSelector(state => state.tempDimension.tempDimension);
  const weather = useSelector(state => state.weather.weather);

  const dispatch = useDispatch();
  const urlLocation = useLocation();

  const weatherLocation = searchLocation.city !=='' ? searchLocation : userLocation;

  useEffect(() => {
    dispatch(getRealUserLocation());
    dispatch(setMainBackground());
  }, []);

  useEffect(() => {
    if (weatherLocation.city) {
      dispatch(getWeather(weatherLocation, tempDimension));
    }
  }, [dispatch, weatherLocation, tempDimension]);

  const backgroundImage = {
    background: `url(${image}) center center / cover no-repeat fixed`
  }

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
