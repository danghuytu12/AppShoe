import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../../context/CartContext';
export const HeaderCart = () => {
  const { cartData } = useContext(CartContext);

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      
        <Icon name="cart-outline" size={30} />
        <Text style={styles.title}>
          {' '}
          {/* just dont want to  show zero just me */}
          {cartData.length === 0 ? null : cartData.length}
        </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: 'red',
  },
});
