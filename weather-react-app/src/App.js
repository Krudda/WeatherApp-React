/* eslint-disable react-hooks/exhaustive-deps */
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
  const tempDimension = useSelector(state => state.serviceStates.tempDimension);
  const loading = useSelector(state => state.serviceStates.weatherLoading);
  const weather = useSelector(state => state.weather.weather);

  const dispatch = useDispatch();
  const urlLocation = useLocation();

  const currentLocation = searchLocation.city !=='' ? searchLocation : userLocation;

  useEffect(() => {
    if  (urlLocation.pathname === '/') {dispatch(getRealUserLocation())}
    dispatch(setMainBackground());
  }, []);

  useEffect(() => {
    if (currentLocation.city) {
      dispatch(getWeather(currentLocation, tempDimension));
    }
  }, [dispatch, currentLocation, tempDimension]);

  const backgroundImage = {
    background: `linear-gradient(rgba(8, 15, 26, 0.5), rgba(8, 15, 26, 0.5)) center center / cover no-repeat, 
    url(${image}) center center / cover no-repeat fixed`,
  }

  useEffect(() => {
    const weatherCity = weather.city_name ? weather.city_name.toLowerCase() : null;
    const currentPath = urlLocation.pathname.slice(1);
    const searchParams = new URLSearchParams(currentPath);
    const city = searchParams.get('city');
    const temp_dim = searchParams.get('temp_dim');

    if (temp_dim && temp_dim  !== tempDimension) {
      dispatch(setTempDimension(temp_dim));
    }
    if (city && city !== weatherCity) {
      dispatch(setSearchLocation(city));
    };
  }, [urlLocation]);

  return (
    <div className = {styles.container} >
      <div className = {styles.background_image} style = {backgroundImage} >
      </div>
      {weather.error && !loading && <Notification error = {weather.error}/>}
      
      { userLocation  &&
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
