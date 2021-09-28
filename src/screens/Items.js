import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {width} from '../constants/layout';
import Icon from 'react-native-vector-icons/Ionicons';

export const Items = ({navigation, route}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(route.params.item);
  }, []);

  const {items, title} = data;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}>
        {/* header */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* go Back */}
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              borderRadius: 15,
            }}
            onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" color="white" size={25} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              textTransform: 'capitalize',
              textAlign: 'center',
              flex: 1,
            }}>
            {title}
          </Text>
        </View>

        <FlatList
          key={`_`}
          numColumns={2}
          data={items}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', {item})}
                style={{
                  width: width * 0.5 - 10,
                  padding: 5,
                }}>
                <Image
                  source={item.images[0]}
                  style={{
                    width: '100%',
                    height: 200,
                  }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Montserrat-Bold',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
