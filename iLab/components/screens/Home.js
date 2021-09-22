import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import { Caption, Title } from 'react-native-paper';
import AgendaCalender from '../calender/AgendaCalender';

export default function Home(props){
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <View style={{marginLeft:28, flexDirection:'column'}}>
                    <Caption style={styles.caption}>Welcome Back, Peter</Caption>
                    <Title style={styles.title}>Calender</Title>
                </View>

                <View style={styles.agenda}>
                    <AgendaCalender />
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
        alignItems: 'center'
    }
})
