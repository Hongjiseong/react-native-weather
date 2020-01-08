import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = "2c75100ce30c358fb021b63a82834dab";
const ROOT_URL = "http://api.openweathermap.org/data/2.5/weather";


export default class extends React.Component {
  _isMounted = false;

  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get(
      `${ROOT_URL}?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );

    if(this._isMounted){
      this.setState({ 
        isLoading:false, 
        temp: temp, 
        condition: weather[0].main
      })
    }
  }

  // 자동 바인딩 패턴
  // : 함수명 = () => {}
  getLocation = async() => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading:false })
    }catch (error){
      Alert.alert("Can't find you.", "So sad");
    }
  }

  componentDidMount(){
    this._isMounted = true;
    this.getLocation();
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading || !condition ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}