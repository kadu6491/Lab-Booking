import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'; 

export default function TextWithIcon(props){
    return (
       <View style={styles.root}>
           {props.icon}
           <Text style={{paddingLeft: 6, color: "#eee", fontSize: 12}}>{props.text}</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    root: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
    }
})