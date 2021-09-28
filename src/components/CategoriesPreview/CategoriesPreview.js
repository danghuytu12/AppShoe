import React, { useEffect, useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity, FlatList } from 'react-native';
import { width, SubHeading } from '../../constants';
import { data } from "../../Data";
import Fontisto from "react-native-vector-icons/Fontisto";
export const CategoriesPreview = ({ title, data, navigation }) => {
  return data ? (


    <Animated.ScrollView  >
      {data.items.map(item => {
        return (

          <View key={item.name} activeOpacity={0.8} style={{ marginTop: 5, backgroundColor: 'red', height: 200, width: 390, borderRadius: 15 }}>
            <TouchableOpacity
              key={item.name}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Details', { item })}
              style={{ flexDirection: 'row' }}
            >
              <View style={{ backgroundColor: 'white', width: 160, height: 200 }} activeOpacity={0.8}>
                <Image
                  source={item.images[0]}
                  style={{
                    width: width * 1.7,
                    height: 150,
                    alignSelf: 'center',
                    justifyContent: 'center'
                  }}
                  resizeMode="contain"
                />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 17, fontWeight: '600', marginLeft: 10 }}>Price: </Text>
                  <Text style={{ fontSize: 17, color: 'red' }}>$ {item.price}</Text>
                </View>
                <Text style={{ marginLeft: 10, fontWeight: '300', color: 'gray' }}>from {item.title}</Text>
              </View>
              <View style={{ backgroundColor: 'white', width: 230, height: 200, }} activeOpacity={0.8}>
                <Text style={{ marginTop: 10, marginLeft: 10 }}>{item.date}</Text>
                <Text style={{ marginLeft: 10, fontWeight: '400', marginTop: 5 }}>{item.name}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 30, height: 30, backgroundColor: '#00CC00', marginLeft: 10, marginTop: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>
                      {item.rating}
                    </Text>
                  </View>
                  <Text style={{ marginTop: 10, marginLeft: 10, color: 'gray' }}>based on {item.reviews} reviews</Text>

                </View>
                <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 13.5 }} >{item.description}</Text>
                <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 5, color: "dodgerblue" }}>Details</Text>
              </View>

            </TouchableOpacity>
            <View style={{ borderBottomWidth: 0.6, borderBottomColor: '#FFCCCC' }} />
          </View>




        )

      })}
    </Animated.ScrollView>




  ) : null;
  //   return (
  //
  //   );
};
