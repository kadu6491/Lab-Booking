import React, {useState} from 'react'

import { StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';


export default function DropList(props){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Barry Art Building', value: 'BAB', disabled: true},
        {label: 'BAB 1003', value: 'BAB1003', parent: 'BAB'},
        {label: 'BAB 2002', value: 'BAB2002', parent: 'BAB'},
        {label: 'BAB 2009', value: 'BAB2009', parent: 'BAB'},
        {label: 'BAB 2011', value: 'BAB2011', parent: 'BAB'},
      
        {label: 'Hixon Art Building', value: 'HAS', disabled: true},
        {label: 'HAS 2000', value: 'HAS2000', parent: 'HAS'},
        {label: 'HAS 2006', value: 'HAS2006', parent: 'HAS'},
        {label: 'HAS 2008', value: 'HAS2008', parent: 'HAS'},
      ]);
    return (
        <DropDownPicker
            // multiple={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            searchable={true}
            closeAfterSelecting={true}
            maxHeight={400}
            loading={true}
            searchPlaceholder="Search Lab... ex BAB 2011"
            placeholder="Please select Building and Room"
            theme="DARK"
            translation={{
                SELECTED_ITEMS_COUNT_TEXT: value == null || undefined ? "" : value[0]
            }}
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
            searchTextInputStyle={{
                height: 45,
                textAlign: 'left'
            }}
            onOpen={props.onOpen}
            onClose={props.onClose}    
        />
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