import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={style.font1}>{props.main}</Text>
            <Text style={style.font2}>{props.description}</Text>
            <Text style={style.font3}>{props.temp}</Text>
            <Text style={style.font4}>°C</Text>
         </View>
    );
}

const style = StyleSheet.create({
    font1: {
        color: '#898987',
        textAlign: 'center',
        fontSize: 15,
    },
    font2: {
        color: '#898987',
        textAlign: 'center',
        fontSize: 15,
    },
    font3: {
        color: '#285EB8',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    font4: {
        color: '#285EB8',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})