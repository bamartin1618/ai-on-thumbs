import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, Platform, Dimensions } from 'react-native'
import Draggable from 'react-native-draggable'

export default function NoseDetection ({ found, setFound, setFilterText, imageXOffset, imageYOffset }) {
  // location of the draggable filter (x,y) coordinates
  const [dragX, setDragX] = useState(0)
  const [dragY, setDragY] = useState(0)

  // distance of draggable filter from target
  const [xDist, setXDist] = useState(100)
  const [yDist, setYDist] = useState(100)

  // height and width of image (used to perform calculations for target of draggable filter)
  const imageWidth = Dimensions.get('window').width / 1.5
  const imageHeight = Dimensions.get('window').height / 3

  // dimensions of the draggable container (used for responsiveness to different screen sizes)
  const [dragContainerDim, setDragContainerDim] = useState({ width: 0, height: 0, x: 0, y: 0 })

  useEffect(() => {
    if (Math.round(1 / xDist * 100) > 4.2 && Math.round((1 / yDist * 100)) > 4.2) {
      setFilterText('The filter matches up closest to the nose bridge because it forms a vertical line!')
      setFound(true)
    } else {
      setFilterText('You detected the eyes in this region. Are there any other features here?')
    }
  })

  return (

    <View style={styles.container}>

      {/* View that contains an image and a draggable filter ron top of it */}
      <View
        style={styles.dragContainer} onLayout={(event) => {
          // get dimensions of container and
          const { x, y, width, height } = event.nativeEvent.layout
          setDragContainerDim({ width: width, height: height, x: x, y: y })
        }}
      >

        {/* main image of face */}
        <Image
          style={{ width: imageWidth, height: imageHeight }}
          source={require('../assets/obama_face_img_v2.png')}
        />

        {/* Draggable filter */}
        <Draggable
          imageSource={require('../assets/vertical_filter.png')}
          disabled={!!found}
          animatedViewProps={{ opacity: 0.5 }}
          // size of draggable filter for android
          renderSize={45}
          // original starting point of the filter on the image (top left corner)
          x={dragContainerDim.width / 2 - imageWidth / 4}
          y={dragContainerDim.height / 2 - imageHeight / 2.4}
          /* set the minimum and maximum bounds where the draggable item can go to the bounds of the actual image */
          maxX={dragContainerDim.width / 2 + imageWidth / 3.1}
          minX={dragContainerDim.width / 2 - imageWidth / 4}
          minY={dragContainerDim.height / 2 - imageHeight / 2.4}
          maxY={dragContainerDim.height / 2 + imageHeight / 15}
          /* set the draggable filter's state location when the user releases the filter. Calculate the distance between the filter and the nose bridge (where the filter 'similarity' is highest) */
          onDragRelease={(e) => {
            setDragX(e.nativeEvent.pageX - imageXOffset)
            setDragY(e.nativeEvent.pageY - imageYOffset)
            // target of filter is near the middle of the image (nose bridge)
            setXDist(Math.abs(dragContainerDim.width / 1.88 - dragX))
            setYDist(Math.abs(dragContainerDim.height / 2.3 - dragY))
          }}
        >

          {
            /* When using ios, you can use the children parameter to have more customization over the filter image */
            (Platform.OS === 'ios' || Platform.OS === 'web')
              ? (<Image style={ styles.filter } source={require('../assets/vertical_filter.png')} />)
              : null
          }
        </Draggable>

      </View>

      <Text style={styles.paragraph}>
        Current Similarity Match:
        {
          Math.min(Math.round(1 / (xDist + yDist) * 200), 100)
        }

      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    justifyContent: 'center'
  },
  paragraph: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dragContainer: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  equation: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  filter: {
    width: Dimensions.get('window').width / 6,
    height: Dimensions.get('window').height / 8,
    resizeMode: 'contain'
  }
})
