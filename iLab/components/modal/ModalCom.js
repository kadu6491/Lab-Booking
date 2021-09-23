import React from 'react'

import { SafeAreaView, StyleSheet, View } from 'react-native'
import { CalendarList } from 'react-native-calendars';
import { Modal, Portal, Text, Provider, Button, IconButton, Caption } from 'react-native-paper';


export default function ModalCom({visible, hide, main, title}){
    const containerStyle = {
        backgroundColor: '#232323', marginHorizontal: 18, borderRadius: 10,
        paddingHorizontal: 5,
    };
    return (
        <Provider>
            <Portal>
                <Modal 
                    visible={visible} 
                    onDismiss={hide} 
                    contentContainerStyle={containerStyle}
                >
                    <View style={styles.btnHead}>
                        <IconButton 
                            icon="close-circle"
                            color="#7a7a7a"
                            onPress={hide}
                        />
                    </View>

                    <View style={styles.content}>
                        <Caption style={styles.caption}>{title}</Caption>
                        {main}
                    </View>
                </Modal>
            </Portal>
        </Provider>
    )
}

const styles = StyleSheet.create({
    head: {
        marginLeft: 15,
        padding: 10,
    },
    btnHead: {
        // backgroundColor: "red",
        display: "flex",
        alignItems: 'flex-end',
        marginVertical: 2,
    },  
    title: {
        marginTop: 8,
        color: "#eee"
    },
    content: {
        // backgroundColor: "red",
        marginVertical: 10,
        display: "flex",
        padding: 10,
    },
    caption: {
        textAlign: "center",
        color: "#eee",
        fontSize: 18,
        paddingBottom: 20,
    }
})