import React from 'react'

import { Alert, SafeAreaView, StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper';
import TimeTable from '@mikezzb/react-native-timetable';
import { Calendar } from 'react-native-calendars';

export default function TimeEvents(props){
    return (
        <View style={styles.root}>
            <Calendar 
                disableMonthChange={true}
                enableSwipeMonths={true}
                hideExtraDays={true}
                hideArrows={true}
                theme={{
                    backgroundColor: "#121212",
                    calendarBackground: "#121212",
                    selectedDayBackgroundColor: "#696969",
                    todayTextColor: "#7a7a7d",
                    dayTextColor: "white",
                    monthTextColor: "white",
                    textDisabledColor: "#7a7a7d",
                    dotColor: "#7a7a7d",
                }}
                style={{
                    // backgroundColor: "red",
                    
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 12
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: "green",
        flex: 1,
        width: "100%",
        marginVertical: 20,
        paddingHorizontal: 11,
    },
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