import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {Agenda} from 'react-native-calendars';
import { Surface, Title } from 'react-native-paper';

const items = {
    '2021-09-23': [{}],
    '2021-09-24': [{}],
    '2021-09-26': [{}],
    '2021-09-28': [{}],
    '2021-10-05': [{}],

}
export default function AgendaCalender(props){
    const renderItem = () => {
        return (
            // <View style={styles.renderContainer}>
            //     <Text>Date</Text>
            // </View>
            <Surface style={[styles.renderContainer, {backgroundColor: "#232323"}]}>
                <Text style={{color: "#eee"}}>Some Data Here</Text>
            </Surface>
        )
    }

    const renderEmptyItem = () => {
        return (
            <View style={[styles.empty, {backgroundColor: "#232323"}]}>
                <Title style={{color: "white"}}>No Lab Booked</Title>
            </View>
        )
    }
    return (
       <View style={styles.root}>
           <Agenda 
                items={items}
                renderItem={renderItem}
                renderEmptyData={renderEmptyItem}
                maxDate={'2021-10-10'}
                showClosingKnob
                theme={{
                    // backgroundColor: "#f8f9fa",
                    // backgroundColor: "white",
                    // calendarBackground: "#f8f9fa",
                    backgroundColor: "#121212",
                    calendarBackground: "#232323",
                    selectedDayBackgroundColor: "#696969",
                    todayTextColor: "#7a7a7d",
                    dayTextColor: "white",
                    monthTextColor: "white",
                    textDisabledColor: "#7a7a7d",
                    dotColor: "#7a7a7d",
                }}
                style={{
                    // backgroundColor: "red",
                    width: '100%',
                }}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: "red",
        flex: 1,
        width: '88%',
        marginTop: 20,
        display: "flex",
        alignItems: 'center',
    },
    renderContainer: {
        // backgroundColor: "#eee",
        // margin: 10,
        padding: 10,
        height: 100,
        borderRadius: 10,
        elevation: 4,
        marginVertical: 17,
    },
    empty: {
        margin: 10,
        padding: 10,
        height: 100,
        borderRadius: 10,
        elevation: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 25,
    }
})
