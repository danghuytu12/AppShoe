import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { CartContext } from '../context/CartContext';
import { colors } from '../constants';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Cart = ({ navigation, route }) => {
  const { cartData, setCartData } = useContext(CartContext);

  const getSummary = cartData => {
    console.log({ cartData });
    let total = 0;
    cartData.forEach(item => {
      total += item.price * item.qty;
    });

    return total;
  };

  const increaseQty = item => {
    const filtered = cartData.find(cartItem => cartItem.name === item.name);

    if (filtered) {
      filtered.qty += 1;
    }

    setCartData([...cartData]);
  };

  const reduceQty = item => {
    const filtered = cartData.find(cartItem => cartItem.name === item.name);

    if (filtered && filtered.qty > 1) {
      filtered.qty -= 1;
      setCartData([...cartData]);
    } else if (filtered.qty === 1) {
      const newCartData = cartData.filter(
        cartItem => cartItem.name !== item.name,
      );

      setCartData([...newCartData]);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView>
        {/* container */}
        <View style={styles.container}>
          {cartData.length > 0 ? (
            <View>
              {/* cart header */}
              <Text style={styles.heading}> Your Cart </Text>

              {
                // render Cart Content
                cartData.map((item, index) => {
                  return (
                    <View style={{ backgroundColor: 'white', width: '100%', height: 130, flexDirection: 'row' }} key={index}>
                      <View style={{ backgroundColor: 'white', width: '33%', height: '100%' }}>
                        <Image
                          source={item.images[0]}
                          style={{
                            width: 120,
                            height: 120,
                          }}
                        />
                      </View>
                      <View style={{ backgroundColor: 'white', width: '54%', height: '100%' }}>
                        <Text style={{ marginLeft: 5, marginTop: 10, color: 'black', fontWeight: '500', fontSize: 14 }}>{item.name}</Text>
                        <Text style={{ marginLeft: 5, color: 'gray' }}>{item.title}</Text>

                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: 60,
                            height: 50,
                            marginTop: 5,
                            marginLeft: 70
                          }}>
                          <TouchableOpacity style={{ backgroundColor: 'whitesmoke', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} onPress={() => reduceQty(item)}>
                            <Text style={{ fontSize: 25 }}>
                              -
                            </Text>
                          </TouchableOpacity>
                          <Text style={{}}>{item.qty} </Text>

                          <TouchableOpacity style={{ backgroundColor: 'whitesmoke', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }} onPress={() => increaseQty(item)}>
                            <Text style={{}}>
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{ backgroundColor: 'white', width: '13%', height: '100%' }}>
                        <Text style={{ color: 'gray', marginLeft: 15, marginTop: 10 }}>${item.price}</Text>
                        {/* 
                        <View style={{ backgroundColor: 'red', width: 40, height: 40, marginTop: 55, marginLeft: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                          <AntDesign name="delete" size={30} color='white' />
                        </View>
                        */}
                      </View>
                    </View>
                  );
                })
              }

              {/* order summary */}
              <View
                style={{
                  marginBottom: 20,
                  backgroundColor: 'white'
                }}>
                <View>
                  <Text style={styles.summary}>Totals</Text>
                </View>



                {/* total */}

                {/* total */}
                <View style={styles.row}>
                  <Text style={styles.total}>Sub Total</Text>
                  <Text style={styles.total}> ${getSummary(cartData)} </Text>
                </View>
              </View>

              {/* cta */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                {/*
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate('Success')}>
                  <Text style={styles.btnText}> Place Order</Text>
                </TouchableOpacity>


                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: '#CF0000',
                    },
                  ]}
                  onPress={() => setCartData([])}>
                  <Text style={styles.btnText}> Clear Cart</Text>
                </TouchableOpacity>
                */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Success')}
                  
                  
                  activeOpacity={0.8}
                  style={{ backgroundColor: '#FF3366', width: 170, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 28 }}>
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Place Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setCartData([])}
                 activeOpacity={0.8} 
                 style={{ backgroundColor: '#FF3366', width: 170, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 28 }}>
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Clear Cart</Text>
                </TouchableOpacity>
              </View>

            </View>
          ) : (
            <View>
              <Text style={styles.heading}> Your Cart is empty</Text>
            </View>
          )}
        </View>
        {/* end container */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  summary: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  subTotal: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
  total: {
    fontSize: 25,
    fontFamily: 'Montserrat-Bold',
  },
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    marginBottom: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },

  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    marginBottom: 20,
  },
});
