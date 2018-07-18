import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

class Home extends Component {
  render(){
    return(
      <View>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

export default Home;