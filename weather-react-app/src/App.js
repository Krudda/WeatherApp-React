import {useDispatch, connect}  from 'react-redux';
import {getRealUserLocation, setMainBackground} from './redux/actions';

import Header from './components/Header'
import Main from './components/Main'
import RSS from './components/RSS'

// import getMainBackground from './services/getMainBackground'

import styles from './app.module.scss';


function App({image}) {

  console.log('image', image)

  const dispatch = useDispatch();
  dispatch(getRealUserLocation());
  dispatch(setMainBackground());


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

const mapStateToProps = state => {
  return {
      image: state.backgroundImage.mainBackgroundImage
  }
}

export default connect(mapStateToProps, null)(App);
