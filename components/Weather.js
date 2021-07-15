import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    }) 

    return (
        <ImageBackground source={require('../img.jpg')} style={styles.backdrop}>
            <Text>Zip Code is </Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
 );
}
const styles = StyleSheet.create({
    backdrop: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //color: 'red',
        width: '100%',
        height: '100%'
 }, 
});
