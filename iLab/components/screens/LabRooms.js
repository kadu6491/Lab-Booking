import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { Caption, Divider, Title } from 'react-native-paper';

import LabsList from '../list/LabsList';

export default function LabRooms(props){
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <View style={{flex: 1}}>
                <View style={styles.head}>
                    <Title style={[styles.title, {color: "#7a7a7a"}]}>Lab Rooms</Title>
                </View>

               <ScrollView>
                    <View style={[styles.head]}>
                        <Caption style={[styles.caption, {color: "white"}]}>Barry Art Building</Caption>
                        <LabsList 
                            room={"BAB 1003"}
                            uri={"https://picsum.photos/id/20/200/300"}
                            limit={20}
                            remaining={15}
                            onPress={() => {console.log("BAB 1003 Clicked")}}
                        />
                        <LabsList 
                            room={"BAB 2002"}
                            uri={"https://picsum.photos/id/201/200/300"}
                            limit={15}
                            remaining={12}
                            onPress={() => {console.log("BAB 2002 Clicked")}}
                        />
                        <LabsList 
                            room={"BAB 2009"}
                            uri={"https://picsum.photos/id/2/200/300"}
                            limit={5}
                            remaining={0}
                            onPress={() => {console.log("BAB 2009 Clicked")}}
                        />
                        <LabsList 
                            room={"BAB 2011"}
                            uri={"https://picsum.photos/id/445/200/300"}
                            limit={15}
                            remaining={8}
                            onPress={() => {console.log("BAB 2011 Clicked")}}
                        />
                    </View>

                    <Divider style={styles.divider}/>
                    
                    <View style={[styles.head]}>
                        <Caption style={[styles.caption, {color: "white"}]}>Hixon Art Studio</Caption>
                        <LabsList 
                            room={"HAS 2000"}
                            uri={"https://picsum.photos/id/532/200/300"}
                            limit={15}
                            remaining={11}
                            onPress={() => {console.log("HAS 2000 Clicked")}}
                        />
                        <LabsList 
                            room={"HAS 2006"}
                            uri={"https://picsum.photos/id/48/200/300"}
                            limit={4}
                            remaining={0}
                            onPress={() => {console.log("HAS 2006 Clicked")}}
                        />
                        <LabsList 
                            room={"HAS 2008"}
                            uri={"https://picsum.photos/id/3/200/300"}
                            limit={15}
                            remaining={4}
                            onPress={() => {console.log("HAS 2008 Clicked")}}
                        />
                    </View>
               </ScrollView>
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
    divider: {
        marginHorizontal: 18,
        marginVertical: 10,
        backgroundColor: "#eee"
    },
    caption: {
        fontSize: 15,
        letterSpacing: 1.6,
        textTransform: "uppercase"
    }
})
