import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Header from './Header';
import {ACTIONS} from './../context/QuestionContext/Action';
import {useQuestion} from '../context/QuestionContext';
import Tts from 'react-native-tts';
import ButtonNext from './ButtonNext';

const FourChoice = ({navigation, children, ans, speak, checkAns}) => {
  const {ansChoice, dispatch} = useQuestion();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {children}

      <View style={styles.options}>
        {ans &&
          ans.map((e, i) => {
            const hanldePress = () => {
              dispatch({type: ACTIONS.CHOICE_ANS, payload: i + 1});
              if (speak) {
                Tts.stop();
                Tts.speak(e);
              }
            };

            return (
              <TouchableOpacity
                onPress={hanldePress}
                style={[
                  styles.optionButton,
                  ansChoice === i + 1 ? styles.choice : null,
                ]}
                key={i}
              >
                <Text style={styles.option}>{e}</Text>
              </TouchableOpacity>
            );
          })}
      </View>

      <View style={styles.bottom}>
        <ButtonNext checkAns={checkAns} navigation={navigation} />
      </View>
    </View>
  );
};

export default FourChoice;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  top: {
    marginVertical: 20,
    backgroundColor: '#CCFFCC',
    height: 100,
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#99FFCC',
  },
  choice: {
    backgroundColor: '#0099FF',
  },
  banner: {
    height: 40,
    width: 100,
    right: 150,
  },
  options: {
    marginVertical: 5,
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  bottom: {
    marginBottom: 5,
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3399CC',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 30,
    textAlign: 'center',
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  questions: {
    fontSize: 28,
    textAlign: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
  },
  option: {
    fontSize: 20,
    color: 'black',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 10,
    backgroundColor: 'white',
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#99FFFF',
  },
});
