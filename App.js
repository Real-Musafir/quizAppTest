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
            name={'chevrons-down'}
            type={'feather'}
            size={35}
            color={'white'}
          />
          <Text>UI UX Design Quiz</Text>
          <View>
            <Text>Clock</Text>
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
});

export default App;
