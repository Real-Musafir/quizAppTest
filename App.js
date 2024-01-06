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
  const [selectAnswerNumber, setSelectAnswerNumber] = useState(999999);
  const questions = [
    'User interface and User Experience',
    'User interface and User Experience',
    'User interface and User Experience',
    'User interface and User Experience',
    'User interface and User Experience',
  ];

  function numberToLetter(number) {
    // Assuming input number starts from 0
    const asciiCode = 'A'.charCodeAt(0) + number;
    return String.fromCharCode(asciiCode);
  }

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
            .map((_, index) => (
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
                        : ['#CCCCCC', '#CCCCCC', '#CCCCCC']
                    }
                    style={styles.countNumber}>
                    <Text style={styles.countDigit}>{index + 4}</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
            ))}
        </View>

        <Text style={styles.questionText}>
          What is the meaning of UI UX Design?
        </Text>

        {questions.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectAnswerNumber(index)}
            style={styles.optionChooseView}>
            <View
              style={[
                styles.alphavetView,
                selectAnswerNumber === index
                  ? {backgroundColor: '#0098DD'}
                  : null,
              ]}>
              <Text>{numberToLetter(index)}</Text>
            </View>
            <Text
              style={[
                styles.questionOptionText,
                selectAnswerNumber === index ? {color: '#0098DD'} : null,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
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
    width: wp('17%'),
    backgroundColor: 'white',
    borderRadius: wp('3%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: wp('1.3%'),
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
    marginBottom: hp('1.5%'),
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
  questionText: {
    fontSize: hp('1.8%'),
    marginBottom: hp('1.5%'),
  },
  questionOptionText: {
    fontSize: hp('1.6%'),
  },
  optionChooseView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  alphavetView: {
    height: hp('3.4%'),
    width: hp('3.4%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('2%'),
    backgroundColor: '#DDDDDD',
    marginRight: wp('2%'),
  },
});

export default App;
