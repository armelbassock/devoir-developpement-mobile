import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import logo from './assets/p_cat2.png'

// const logo = {
//   uri: './assets/p_cat2.png',
//   width: 64,
//   height: 64
// };

const App = () => (
  <ScrollView>
    <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Text style={{ fontSize: 20 }}>If you like</Text>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Text style={{ fontSize: 20 }}>Scrolling down</Text>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Text style={{ fontSize: 20 }}>What's the best</Text>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Text style={{ fontSize: 20 }}>Framework around?</Text>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Image source={logo} style={{width: 50, height: 50}}/>
    <Text style={{ fontSize: 20 }}>React Native</Text>
  </ScrollView>
);

export default App;