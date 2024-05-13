import React ,{useState} from 'react'
import { connect } from 'react-redux'
import { FlashList } from '@shopify/flash-list';
import {Picker} from '@react-native-picker/picker';
import { Pressable, Text, View, StyleSheet, TextInput ,Button ,Modal } from 'react-native';
export const Unite = (props) => {
    return (
        <View>
            <Text>
            Add_project
            </Text>
         
            
            </View>
      )
    }
    
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Unite)