import { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native'
import RoundedButton from '../../common/buttons/RoundedButton'

const colorStep = (bgColor) => {
  let bgStr = bgColor.substr(1, 2)
  bgStr = (bgStr * 1 + 5).toString()
  bgStr = bgStr + bgStr + bgStr
  return '#' + bgStr
}

const KzrLab1 = () => {
  const [bgColor, setBgColor] = useState('#000000')
  return (
    <SafeAreaView style={styles.kzrSafeArea}>
      <View style={[styles.kzrBox, { backgroundColor: bgColor }]}></View>
      <RoundedButton
        style={styles.kzrButton}
        onPress={() => setBgColor(colorStep(bgColor))}
        title="Try me"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  kzrSafeArea: {
    backgroundColor: '#333333',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  kzrButton: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  kzrTitle: {
    color: '#FFFFFF',
    marginTop: 32,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  kzrBox: {
    height: 100,
    margin: 50,
  },
})

export default KzrLab1
