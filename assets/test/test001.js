import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Flex = () => {
  return(
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={{flex: 3, borderWidth: 1, borderColor: '#5B6971'}}/>
      <View style={{flex: 1}}/>
      <View style={{flex: 3, borderWidth: 1, borderColor: '#5B6971'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#CFDDE5',
  },
});

export default Flex;