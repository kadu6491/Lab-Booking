import React from 'react'

import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper';


export default function Accounts(props){
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <View style={{flex: 1}}>
                <View style={styles.head}>
                    <Title style={[styles.title, {color: "#7a7a7a"}]}>Accounts</Title>
                </View>
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
})