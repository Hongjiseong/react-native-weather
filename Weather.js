import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Thunderstorm: {
    iconName:"weather-lightning",
    gradient: ["#373b44", "#4286f4"],
    title: "Thunderstorm",
    subtitle: "Actually, outside of the house"
  },
  Drizzle: {
    iconName:"weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay"
  },
  Rain: {
    iconName:"weather-rainy",
    gradient: ["#00c6fb", "#005bea"],
    title: "Rain",
    subtitle: ""
  },
  Snow: {
    iconName:"weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
    title: "Snow",
    subtitle: "Do you want to build a snowman? Fuck no."
  },
  Atmosphere: {
    iconName:"weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "Atmosphere",
    subtitle: ""
  },
  Clear: {
    iconName:"weather-sunny",
    gradient: ["#fef253", "#ff7300"],
    title: "Clear",
    subtitle: "Go get your ass burnt"
  },
  Clouds: {
    iconName:"weather-cloudy",
    gradient: ["#d7d2cc", "#304352"],
    title: "Clouds",
    subtitle: "I know, fucking boring"
  },
  Mist: {
    iconName:"weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Mist",
    subtitle: "It's like you have no glasses on."
  },
  Dust: {
    iconName:"weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Dust",
    subtitle: "Thanks a lot China"
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "Haze",
    subtitle: "Just don't go outside."
  }
}

export default function Weather({ temp, condition }){
  return (
    <LinearGradient 
        colors={weatherOptions[condition].gradient}
        style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons 
          size={96} 
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{...styles.halfContainer, ...styles.textContainer}}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition:PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 36,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600"
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: "flex-start"
  }
});