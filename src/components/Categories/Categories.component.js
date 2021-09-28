import React, {useContext} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {DataContext} from '../../context/DataContext';

export const Categories = ({navigation}) => {
  const {data} = useContext(DataContext);
  const values = Object.values(data);

  return (
    <ScrollView>
      <View>
        {values.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Items', {item})}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textTransform: 'capitalize',
                }}>
                {' '}
                {item.title}{' '}
              </Text>
              <Image
                source={item.items[0].images[0]}
                style={{
                  width: 200,
                  height: 200,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};
