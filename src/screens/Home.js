import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,

} from 'react-native';
import styled from 'styled-components/native';
import Data from '../Data';
import { width, height } from '../constants/layout';
import { DefaultText, Container, Heading } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'
import { CategoriesPreview } from '../components/CategoriesPreview/CategoriesPreview';
import { HeaderCart } from '../components/HeaderCart/headerCart.component';
// remove this to constants
//already using title
//change to styld text
const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: Montserrat-bold;
`;

//render header
const renderHeader = () => {
  return (
    <View style={styles.textWrapper}>
      {/* show number of items in cart */}
      <View >
        <Text style={styles.logoText}>Shoe</Text>
      </View>

      <View>
        {/* show num items in cart */}

        <HeaderCart />
      </View>

      {/* icon */}
    </View>
  );
};

const renderMainPreview = (data, navigation) => {
  const transformed = Object.values(data);

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}>
      {transformed.map(item => {
        return (
          <TouchableOpacity
            style={{
              width,
              height: '100%',
            }}
            key={item.title}
            onPress={() => navigation.navigate('Items', { item })}>
            <Heading> {item.title} </Heading>

            <Image
              source={item.items[0].images[0]}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      })}
    </Animated.ScrollView>
  );
};

export const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Data);
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:"white"
      }}>
      <ScrollView>
        <Container>
          {renderHeader()}

          {/*
          <View
            style={{
              height: height * 0.4,
            }}>
            {renderMainPreview(data, navigation)}
          </View>
          */}

          {/* Swiper */}

          <Swiper style={styles.wrapper} autoplay={true}>
            <View style={styles.slide2}>
              <Image
                source={{ uri: 'data:image/jpeg;base64,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' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={styles.slide1}>
              <Image
                source={{ uri: 'data:image/jpeg;base64,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' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>

            <View style={styles.slide3}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjJTprhPfy1Pp2frV4Y7huCGZPzQ4ApWs3w&usqp=CAU' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                source={{ uri: 'data:image/jpeg;base64,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' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={styles.slide3}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2tD4Zug39OQ6Tn8ybNNpVaud1ZnR18A57Uw&usqp=CAU' }}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
              />
            </View>
          </Swiper>
          {/* categories preview */}
          <View>
          <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10}}>ALL SHOES</Text>
            <CategoriesPreview
              title="nike"
              data={data['nike']}
              navigation={navigation}
            />

            <CategoriesPreview
              title="jordan"
              data={data['jordan']}
              navigation={navigation}
            />
            <CategoriesPreview
              title="adidas"
              data={data['adidas']}
              navigation={navigation}
            />

            <CategoriesPreview
              title="women"
              data={data['women']}
              navigation={navigation}
            />

            <CategoriesPreview
              title="kids"
              data={data['kids']}
              navigation={navigation}
            />
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    marginBottom: 30,
  },

  logoText: {
    fontSize: 20,

  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  wrapper: {
    height: 300,
    
    justifyContent: "center",
    alignSelf:'center'
  },
  slide1: {
    width: '98%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    width: '95%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    width: '95%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
