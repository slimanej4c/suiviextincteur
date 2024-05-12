import React from 'react'
import { connect } from 'react-redux'
import { Pressable, Text, View, StyleSheet, Animated, Easing } from 'react-native';
export const Dashboard = (props) => {
  return (
    <View>
        <Text>Dashboard</Text>
        
        </View>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)