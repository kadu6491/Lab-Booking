import React from 'react'

import { SafeAreaView, StyleSheet, View } from 'react-native'
import { CalendarList } from 'react-native-calendars';


export default function BookCalendar({onDayPress}){
    return (
        <CalendarList 
            horizontal={true}
            calendarWidth={320}
            maxDate={'2021-10-10'}
            theme={{
                // backgroundColor: "#232323",
                calendarBackground: "#232323",
                dayTextColor: "white",
                monthTextColor: "white",
                textDisabledColor: "#7a7a7d",
            }}
            onDayPress={onDayPress}
            style={{
                height: 340,
            }}
        />
    )
}

const styles = StyleSheet.create({
    head: {
        marginLeft: 15,
        padding: 10,
    },
    title: {
        fontSize: 25,
        marginTop: 8,
        fontWeight: 'bold',
    },
})