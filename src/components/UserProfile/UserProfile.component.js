import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserOptions} from '../UserOptions/UserOptions.component';

export const UserProfile = () => {
  const {user, setUser} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {textAlign: 'center'}]}>Welcome!</Text>

        <Text
          style={[
            styles.text,
            {textAlign: 'center', textTransform: 'capitalize', fontSize: 25},
          ]}>
          {' '}
          {user.name}{' '}
        </Text>
      </View>

      <UserOptions />
    </View>
  );
};

// transform globlal styling later
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
