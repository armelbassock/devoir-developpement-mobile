import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Devin1'},
          {key: 'Dan1'},
          {key: 'Dominic1'},
          {key: 'Jackson1'},
          {key: 'James1'},
          {key: 'Joel1'},
          {key: 'John1'},
          {key: 'Jillian1'},
          {key: 'Jimmy1'},
          {key: 'Julie1'},
          {key: 'Devin2'},
          {key: 'Dan2'},
          {key: 'Dominic2'},
          {key: 'Jackson2'},
          {key: 'James2'},
          {key: 'Joel2'},
          {key: 'John2'},
          {key: 'Jillian2'},
          {key: 'Jimmy2'},
          {key: 'Julie2'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;