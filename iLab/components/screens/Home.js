import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import { Caption, Title } from 'react-native-paper';
import AgendaCalender from '../calender/AgendaCalender';
import TimeEvents from '../calender/TimeEvents';
;

export default function Home(props){
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <View style={{flex: 1, backgroundColor: "#121212"}}>
                <View style={{marginLeft:28, flexDirection:'column'}}>
                    <Caption style={[styles.caption, {color: "#696969"}]}>Welcome Back, Peter</Caption>
                    <Title style={[styles.title, {color: "#7a7a7a"}]}>Calender</Title>
                </View>

                <View style={styles.agenda}>
                    {/* <AgendaCalender /> */}
                    <TimeEvents />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        
    },
    title: {
        fontSize: 25,
        marginTop: 8,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        marginTop: 20,
    },
    agenda: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        // backgroundColor: "red"
    }
})
