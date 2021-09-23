import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Title } from 'react-native-paper';

import DropDownPicker from 'react-native-dropdown-picker';

export default function Reserve(props){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Barry Art Building', value: 'BAB', disabled: true},
        {label: 'BAB 1003', value: 'bab1003', parent: 'BAB'},
        {label: 'BAB 2002', value: 'bab2002', parent: 'BAB'},
        {label: 'BAB 2009', value: 'bab2009', parent: 'BAB'},
        {label: 'BAB 2011', value: 'bab2011', parent: 'BAB'},
      
        {label: 'Hixon Art Building', value: 'HAS', disabled: true},
        {label: 'HAS 2000', value: 'has2000', parent: 'HAS'},
        {label: 'HAS 2006', value: 'has2006', parent: 'HAS'},
        {label: 'HAS 2008', value: 'has2008', parent: 'HAS'},
      ]);
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: "#121212"}}>
            <View style={{flex: 1}}>
                <View style={styles.head}>
                    <Title style={[styles.title, {color: "#7a7a7a"}]}>Reserve Lab</Title>
                </View>

                <View style={styles.drop}>
                    <DropDownPicker
                        multiple={true}
                        min={0}
                        max={1}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        searchable={true}
                        closeAfterSelecting={true}
                        maxHeight={400}
                        searchPlaceholder="Search Lab... ex BAB 2011"
                        placeholder="Please select Building and Room"
                        theme="DARK"
                        style={{
                            backgroundColor: "#232323",
                        }}
                        textStyle={{
                            color: "#eee"
                        }}
                        listParentContainerStyle={{
                            backgroundColor: "#232323"
                        }}
                        listChildContainerStyle={{
                            backgroundColor: "#232323"
                        }}
                        searchContainerStyle={{
                            backgroundColor: "#232323",
                            
                        }}
                        
                        
                    />
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
    drop: {
        marginHorizontal: 15,
        marginVertical: 10,
    }
})