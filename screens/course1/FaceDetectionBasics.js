import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Tip from '../../components/Tip'
import LessonHeader from '../../components/LessonHeader'
import LessonButton from '../../components/LessonButton'
import ParagraphBox from '../../components/ParagraphBox'
import { LinearGradient } from 'expo-linear-gradient'

export default function FaceDetectionBasics ({ navigation }) {
  return (
    <LinearGradient colors={['#8976C2', '#FFFFFF']} style={styles.container}>
      <LessonHeader>Face Detection Basics</LessonHeader>
      <Tip tipText='Eyes + Ears + Nose + Mouth = Face?' />

      <View style={[styles.imageContainer]}>

          <Image source={require('../../assets/detection_basics.png')} style={{flex: 1, width: '100%'}}/>

      </View>

      <ParagraphBox text='If we can find parts of a face within the image, we can estimate that there is a face present in the given region.' />

      <View style={styles.footerButtons}>
        <LessonButton navigation={navigation} nextScreen='PixelScreen' buttonColor='#8976C2' buttonText='Back' />
        <LessonButton navigation={navigation} nextScreen='HowContrastWorks' buttonColor={['#32B59D', '#3AC55B']} buttonText='Continue' />
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
  imageContainer: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    padding: 8
  },
  footerButtons: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
