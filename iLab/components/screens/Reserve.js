import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, Caption, Title } from 'react-native-paper';
import BookCalendar from '../calender/BookCalendar';

import DropList from '../list/DropList';
import ModalCom from '../modal/ModalCom';
import BookTime from '../time/BookTime';

export default function Reserve(props){
    const [open, setOpen] = useState(false)
    const [calModal, setCalModal] = React.useState(false);
    const [timeModal, setTimeModal] = React.useState(false);
    const [date, setDate] = React.useState()

    const showCalModal = () => setCalModal(true);
    const hideCalModal = () => setCalModal(false);

    const showTimeModal = () => setTimeModal(true);
    const hideTimeModal = () => setTimeModal(false);

    const handleDate = (day) => {
        setDate(day.dateString)
        setCalModal(false)
    }

    // console.log(new Date(Date.now() + 12096e5))

    return (
       <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <View style={{flex: 1}}>
                <View style={styles.head}>
                    <Title style={[styles.title, {color: "#7a7a7a"}]}>Reserve Lab</Title>
                </View>

                <View style={styles.drop}>
                    <Caption style={styles.caption}>Select a Lab</Caption>
                    <DropList 
                        onOpen={() => (setOpen(true))}
                        onClose={() => (setOpen(false))}
                    />
                </View>

                <View style={[styles.datetime, {display: open && 'none'}]}>
                    <View style={styles.date}>
                        <Caption style={styles.caption}>Select Date {date}</Caption>
                        <BookTime 
                            mode="datetime"
                        />
                        {/* <Button 
                            mode="outlined"
                            color="white"
                            style={{
                                borderColor: "#7a7a7a",
                                borderWidth: 1.4,
                            }}
                            labelStyle={{
                                fontSize: 10,
                            }}
                            onPress={showCalModal}
                        >
                            {date == null || undefined || "" ? "Select Time" : "Change Date"}
                        </Button> */}

                        
                    </View>
                    
                    {/* <View style={styles.time}>
                        <Caption style={styles.caption}>Select Time</Caption>
                        <BookTime mode="time"/>
                    </View> */}
                </View>

                <ModalCom 
                    visible={calModal} 
                    hide={hideCalModal} 
                    title="Pick a Date"
                    main={<BookCalendar onDayPress={(day) => (handleDate(day))}/>}
                />

                <ModalCom 
                    visible={timeModal} 
                    hide={hideTimeModal} 
                    title="Pick a time"
                    main={<BookTime />}
                />
            </View>
       </SafeAreaView>
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
    drop: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    caption: {
        color: '#7a7a7a',
        paddingVertical: 5,
        fontSize: 15,
        letterSpacing: 1.1,
        paddingLeft: 6,
        fontWeight: '400'
    },
    datetime: {
        // backgroundColor: "red",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 10,
        marginHorizontal: 15,
    },
    date: {
        // backgroundColor: 'pink',
        width: "90%"
    },
    time: {
        // backgroundColor: 'yellow',
        width: "45%",
    }
})