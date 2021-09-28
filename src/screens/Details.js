import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { width } from '../constants/layout';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';
import { FavouriteContext } from '../context/FavouriteContext';

export const Details = ({ navigation, route }) => {
  const data = route.params.item;
  const [imgSource, setImgSource] = useState(route.params.item.images[0]);
  const [imgIndex, setImgIndex] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(0);

  // get cart context
  const { cartData, setCartData } = useContext(CartContext);
  // favoourite context
  const { favData, setFavData } = useContext(FavouriteContext);

  const clearCart = () => {
    setCartData([]);
  };
  const addItemToCart = item => {
    // check if there is data in cart
    if (cartData.length > 0) {
      // check if item already exist
      let filtered = cartData.find(cartItem => cartItem.name === item.name);

      if (filtered) {
        filtered.qty += 1;

        setCartData([...cartData]);

        // redirect to cart screen
        navigation.navigate('Cart');
      } else {
        setCartData([...cartData, { ...item, qty: 1 }]);

        navigation.navigate('Cart');
      }
    } else {
      let itemToAdd = { ...item, qty: 1 };
      setCartData([itemToAdd]);
      navigation.navigate('Cart');
    }
  };

  // add item to favourites
  const addItemToFavourites = item => {
    setFavData([item, ...favData]);
    navigation.navigate('Favourite');
  };

  const renderFavCta = item => {
    const filtered = favData.find(favItem => favItem.name === item.name);

    if (!filtered) {
      return (
        <TouchableOpacity
          style={{
            backgroundColor: '#FF3366',
            width: 180,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25
          }}
          onPress={() => addItemToFavourites(data)}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontFamily: 'Montserrat-Bold',
              marginRight: 10,
              fontSize: 18,
              fontWeight: 'bold'
            }}>
            Add to Favourite
          </Text>


        </TouchableOpacity>
      );
    }
  };

  // render images
  const renderImages = (images, setImgSource, imgIndex, setImgIndex) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        {images.map((item, index) => {
          return (

            <TouchableOpacity
              key={index}
              style={{
                width: width / 4 - 20,
                marginRight: 10,
                borderWidth: 2,
                borderRadius: 5,
                borderColor: `${imgIndex === index ? colors.grey : 'transparent'
                  }`,
              }}
              onPress={() => {
                setImgSource(item);
                setImgIndex(index);
              }}>
              <Image
                source={item}
                style={{
                  width: '100%',
                  height: 70,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  // render sizes
  const renderSizes = sizes => {
    return sizes.map((size, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            marginRight: 10,
            backgroundColor: sizeIndex === index ? colors.primary : 'white',
            borderRadius: 50,
            padding: 10,
          }}
          onPress={() => setSizeIndex(index)}>
          <Text
            style={{
              fontSize: 20,
              color: sizeIndex === index ? 'white' : 'black',
            }}>
            {size}
          </Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView>
        {/* go back */}
        <TouchableOpacity
          style={{
            marginLeft: 20,
          }}
          onPress={() => navigation.goBack()}>
          <Icon name="close-outline" size={30} />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 20,
          }}>
          {/* item image */}
          <Image
            source={imgSource}
            style={{
              width: '100%',
              height: 400,
              marginTop: 20,
            }}
            resizeMode="contain"
          />

          {/* renderImages */}

          <View>
            {renderImages(data.images, setImgSource, imgIndex, setImgIndex)}
          </View>

          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Montserrat-Bold',
              marginBottom: 10,
            }}>
            {data.name}
          </Text>

          {/* price */}
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Montserrat-Bold',
              marginBottom: 20,
            }}>
            {' '}
            ${data.price}
          </Text>

          {/* sizes */}
          <Text
            style={[
              styles.textBold,
              {
                marginBottom: 10,
              },
            ]}>
            Sizes:
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              alignItems: 'center',
            }}>
            {renderSizes(data.sizes)}
          </View>

          {/* cta - add to cart */}

          {/* render favourites */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            {renderFavCta(data)}

            {/* todo - remove inline styling */}
            <TouchableOpacity
              style={{
                backgroundColor: '#FF3366',
                width: 180,
                height: 60,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25
              }}
              onPress={() => addItemToCart(data)}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontFamily: 'Montserrat-Bold',
                  marginRight: 10,
                  fontSize: 18,
                  fontWeight: 'bold'
                }}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* decortive */}
        <View
          style={{
            paddingTop: 100,
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
  },
  textBold: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
});
