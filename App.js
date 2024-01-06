/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function App() {
  const [currentPosition, setCurrentPosition] = useState(10);
  return (
    <LinearGradient
      colors={['#0088DD', '#00559E', '#004080']}
      style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Icon
              name={'arrowleft'}
              type={'antdesign'}
              size={18}
              color={'white'}
            />
            <Text style={styles.headerText}>UI UX Design Quiz</Text>
          </View>
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
      <View style={styles.bodyPart}>
        <View style={styles.bar} />

        <View style={styles.countContainer}>
          {Array(7)
            .fill()
            .map((item, index) => (
              <TouchableOpacity
                onPress={() => setCurrentPosition(index + 4)}
                style={[
                  currentPosition === index + 4
                    ? styles.countTouchPosition
                    : null,
                ]}
                key={index}>
                <View style={styles.countView}>
                  <LinearGradient
                    colors={
                      currentPosition === index + 4
                        ? ['#0098DD', '#00559E', '#0098DD']
                        : ['#ffffff', '#999999', '#ffffff']
                    }
                    style={styles.countNumber}>
                    <Text style={styles.countDigit}>{index + 4}</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    marginBottom: hp('3%'),
  },
  headerText: {
    color: 'white',
    fontSize: wp('3.5%'),
  },
  headerRight: {
    height: hp('2.4%'),
    width: wp('16%'),
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
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('40%'),
    alignItems: 'center',
  },
  bodyPart: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: wp('6%'),
    paddingHorizontal: wp('5%'),
  },
  bar: {
    height: hp('.4%'),
    backgroundColor: '#0098DD',
    width: wp('10%'),
    alignSelf: 'center',
    marginVertical: hp('2%'),
    borderRadius: wp('1%'),
  },

  countNumber: {
    height: hp('3.4%'),
    width: hp('3.4%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('2%'),
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: hp('.2%'),
    borderBottomColor: '#999999',
  },
  countDigit: {
    fontSize: wp('3%'),
    color: 'white',
  },
  countTouchPosition: {
    borderBottomWidth: hp('.2%'),
    borderColor: '#0098DD',
  },
  countView: {
    marginBottom: hp('1%'),
  },
});

export default App;
