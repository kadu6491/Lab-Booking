import React, {useState} from 'react'

import { useColorScheme, StyleSheet, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import { Text } from 'react-native-paper'

export default function BookTime({mode}){
    const colorScheme = useColorScheme()
    const [date, setDate] = useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        console.log(date)
    };
    
    return (
        <View style={styles.head}>
            <DateTimePicker 
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                themeVariant="dark"
                minimumDate={new Date().setDate(new Date().getDate() - 1)}
                maximumDate={new Date().setDate(new Date().getDate() + 14)}
                placeholderText="select date"
                textColor={{
                    color: "red"
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        // backgroundColor: "red"
    },
    
})