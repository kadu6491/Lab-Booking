import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Avatar, Button, Card, Surface, TextInput, Title } from 'react-native-paper'

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 

import TextWithIcon from '../text/TextWithIcon'


export default function LabsList(props){
    return (
       <View>
           <Surface style={[styles.root, {backgroundColor: "#232323"}]}>
               <Image style={styles.image} source={{ uri: props.uri}} />
               <View style={styles.details}>
                   <Title style={styles.room}>{props.room}</Title>
                  <View style={styles.description}>
                      <TextWithIcon 
                        icon={<FontAwesome5 name="users" size={13} color="white" />}
                        text={props.limit}
                      />

                    <TextWithIcon 
                        icon={<MaterialIcons name="event-available" size={13} color="white" />}
                        text={props.remaining}
                      />
                  </View>

                  <Button 
                    mode="contained"
                    style={styles.btn}
                    color="#00b4d8"
                    disabled={props.remaining === 0}
                    labelStyle={{
                        color: props.remaining === 0 ? "#1f1f20" : "#1f1f20",
                        fontSize: 12
                    }}
                    contentStyle={{
                        backgroundColor: props.remaining === 0 ? "#5c5c5e" : null
                    }}
                    onPress={props.onPress}
                   >
                      {props.remaining > 0 ? "Reserve" : "No Space"}
                  </Button>
               </View>
           </Surface>
       </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 20,
        marginTop: 10,
        borderRadius: 10,
        elevation: 2,
        // backgroundColor: "#f8f9fa",
        marginRight: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
    },
    image: {
        width: "45%",
        height: 120,
        borderRadius: 10,
    },
    details: {
        // backgroundColor: "red",
        width: "50%",
    },
    room: {
        color: "#7a7a7a",
        fontSize: 15,
        letterSpacing: 3,
        paddingLeft: 10,
    },
    description: {
        // backgroundColor: "pink",
        display: "flex",
        flexDirection: "row"
    },
    btn: {
        marginTop: 5,
    }
})
