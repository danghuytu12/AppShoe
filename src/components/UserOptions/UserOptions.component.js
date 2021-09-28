import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {OptionUnit} from './OptionUnit/OptionUnit';

export const UserOptions = () => {
  let optionsData = [
    {
      text: 'My Orders',
      icon: 'card-outline',
    },

    {
      text: 'My Details',
      icon: 'person-outline',
    },

    {
      text: 'Address Book',
      icon: 'book-outline',
    },

    {
      text: 'Notications',
      icon: 'notifications-outline',
    },
    {
      text: 'Payment Method',
      icon: 'cash-outline',
    },
    {
      text: 'Contact Preference',
      icon: 'mail-outline',
    },

    {
      text: 'Sign Out',
      icon: 'log-out-outline',
      type: 'logout',
    },
  ];
  return (
    <View>
      {/* option unit */}

      {optionsData.map((item, index) => {
        return <OptionUnit {...item} key={index} />;
      })}
    </View>
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
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
});
