   
// Algorithm Review 2

import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'

import LessonButton from '../../components/LessonButton'

import { LinearGradient } from 'expo-linear-gradient'

const height = Dimensions.get('window').height

export default function Course2AlgorithmReview2 ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#E6E8FB']} style={styles.container}>
      <View style={styles.interactive}>
        <Text style={styles.bigText}>Lesson Review</Text>
        <Text style={styles.boldText}>1</Text>
        <Text style={styles.text}>Photos are composed of smaller parts: pixels.</Text>
        <Text style={styles.boldText}>2</Text>
        <Text style={styles.text}>Computers use filters to identify facial features. </Text>
      </View>
      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='Course2AlgorithmReview1' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='Course2AlgorithmReview3' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  interactive: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center'
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 30
  },
  boldText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '5%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 25,
    fontWeight: 'bold'
  },
  bigText: {
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginTop: '20%',
    marginBottom: '10%',
    textAlign: 'center',
    color: 'white',
    fontSize: height / 18,
    fontWeight: 'bold'
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})