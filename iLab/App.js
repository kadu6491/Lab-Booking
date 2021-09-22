import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars'

const Item = {
  '2021-09-22': [{room: "BAB 1003", time: "10:30 PM"}],
  '2021-09-23': [{room: "BAB 2011", time: "5:30 PM"}]
}

export default function App() {
  
  const renderItem = () => {
   return (
      <View style={styles.itemContainer}>
        <Text>{"te"}</Text>
      </View>
   )
  }
  const empty = () => {
    return (
      <View>
        <Text>No Schedule</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Agenda 
        items={Item}
        // renderDay={renderItem}
        
        renderItem={renderItem}
        // renderEmptyDate={empty}
        renderEmptyData={empty}
        showClosingKnob={true}
        
        // selected={'2021-09-01'}
        // onDayPress={(day) => {console.log(day)}}
        // onDayChange={(day) => {console.log('day changed')}}
        theme={{
          agendaKnobColor: 'black',
          agendaTodayColor: 'red',
        }}

        style={{
          backgroundColor: "red",
        }}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 9,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 200,
  },
});
