import React, {useState} from 'react';

import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {AntDesign, FontAwesome} from '@expo/vector-icons'

import {
    DrawerContentScrollView,
    DrawerItem,
  } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/routers';

export default  function CustomDrawerContent(props) {
    return (
      <View style={{flex: 1}}>
          <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://picsum.photos/id/1005/50/50'
                            }}
                            size={50}
                        />

                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>Peter Griffin</Title>
                            <Caption style={styles.caption}>Graphic Design</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={(color, size) => (
                            <AntDesign
                                name="home"
                                color={color}
                                size={16}
                            />
                        )}
                        label="Home"
                    />

                    <DrawerItem 
                        icon={(color, size) => (
                            <FontAwesome 
                                name="building"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Labs"
                    />

                </Drawer.Section>



            </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <AntDesign 
                        name="logout"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Out"
            />
        </Drawer.Section>
      </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 17,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})