import React, {useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../context/AuthContext';

export const Login = () => {
  const {setUser} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {textAlign: 'center'}]}> My Account </Text>

      {/* icon  wrapper*/}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: 200,
          marginBottom: 20,
        }}>
        <Icon name="person-outline" size={80} />
      </View>

      {/* text-wrapper */}
      <View>
        <Text style={[styles.text, {textAlign: 'center', fontSize: 20}]}>
          {' '}
          Come on in
        </Text>

        <Text style={[styles.text, {textAlign: 'center'}]}>
          {' '}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </Text>
      </View>

      {/* button wrapper */}
      <View style={{alignItems:'center',}}>
        <TouchableOpacity
        activeOpacity={0.8}
          style={{ backgroundColor: '#FF3366', width: 180, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5}}
          onPress={() =>
            setUser({
              name: 'Huy Tú',
              email: 'huytu411@gmail.com',
            })
          }>
          <Text style={styles.btnText}> Login </Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 20,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
