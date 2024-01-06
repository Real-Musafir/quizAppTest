/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
            <Icon
              name={'clock'}
              type={'feather'}
              size={wp('3%')}
              color={'#0098DD'}
            />
            <Text style={styles.clockDigit}>16:15</Text>
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
  headerRight: {
    height: hp('2.4%'),
    width: wp('18%'),
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  clockDigit: {
    fontSize: wp('3%'),
    color: '#0098DD',
  },
});

export default App;
