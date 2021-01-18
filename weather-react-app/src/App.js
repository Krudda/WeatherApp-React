import {useDispatch, useSelector}  from 'react-redux';
import { useEffect } from 'react';
import { getWeather } from './redux/actions';

import Header from './components/Header'
import Main from './components/Main'
import RSS from './components/RSS'

// import getMainBackground from './services/getMainBackground'

import styles from './app.module.scss';


function App() {

  const image = useSelector(state => state.backgroundImage.mainBackgroundImage);
  const userLocation = useSelector(state => state.userLocation.userLocation);
  // const searchLocation = useSelector(state => state.searchLocation.searchLocation);
  // console.log('searchLocation', searchLocation === true);
  const tempDimension = useSelector(state => state.tempDimension.tempDimension);

  const dispatch = useDispatch();
  // dispatch(getRealUserLocation());
  // dispatch(setMainBackground());


  useEffect(() => {
    dispatch(getWeather(userLocation, tempDimension));
  }, [userLocation, tempDimension]);

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
