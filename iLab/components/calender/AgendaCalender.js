import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {Agenda} from 'react-native-calendars';

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
            <View>
                <Text>Date</Text>
            </View>
        )
    }
    return (
       <View 
            style={{
                flex: 1, backgroundColor: "white",
                width: '90%', marginTop: 20,
            }}
        >
           <Agenda 
                items={items}
                renderItem={renderItem}
                showClosingKnob
                theme={{
                    "stylesheet.calendar.header": {
                        week: {
                            marginTop: 20,
                        }
                    }
                }}
                style={{
                    borderRadius: 0,
                }}
           />
       </View>
    )
}

const styles = StyleSheet.create({

})
