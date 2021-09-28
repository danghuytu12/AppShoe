import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../../../context/AuthContext';

export const OptionUnit = ({text, icon, type}) => {
  const {setUser} = useContext(AuthContext);
  const handleCta = type => {
    if (type === 'logout') {
      setUser(null);
    } else {
      console.log('handle navigation');
    }
  };
  return (
    <TouchableOpacity style={styles.row} onPress={() => handleCta(type)}>
      <View style={styles.row}>
        <Icon name={icon} size={25} />
        <Text style={[styles.text, {marginLeft: 10}]}> {text} </Text>
      </View>
      <Icon name="chevron-forward-outline" size={25} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});
