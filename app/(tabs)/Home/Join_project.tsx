import React from 'react'
import { connect } from 'react-redux'
import { Pressable, Text, View, StyleSheet, Animated, Easing } from 'react-native';
export const join_project = (props) => {
  return (
    <View>
        <Text> Join project</Text>
        
         </View>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(join_project)