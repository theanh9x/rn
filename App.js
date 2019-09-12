/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,

} from 'react-native';


const App = () => {
  return (
    <Fragment>
      <View>
        <Text style={styles.red}>hello hkfhkeh</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 100,
  },
});

export default App;
