/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';

function App() {
  return (
    <LinearGradient
      colors={['#0098DD', '#00559E', '#004080']}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Icon
            name={'arrowleft'}
            type={'antdesign'}
            size={18}
            color={'white'}
          />
          <Text style={styles.headerText}>UI UX Design Quiz</Text>
          <View style={styles.headerRight}>
            <Icon name={'clock'} type={'feather'} size={18} color={'white'} />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add additional styles as needed
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerText: {
    color: 'white',
  },
});

export default App;
