import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {DataContext} from '../../context/DataContext';
export const SearchResult = ({search, navigation}) => {
  const {data} = useContext(DataContext);
  const values = Object.values(data);

  let transformed = [];
  values.forEach(item => {
    const {items} = item;

    items.forEach(item => {
      transformed.push(item);
    });
  });

  const filtered = transformed.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ScrollView>
      <View>
        {filtered &&
          filtered.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}
                key={index}
                onPress={() => navigation.navigate('Details', { item })}>
                <View>
                  <Image
                    source={item.images[0]}
                    style={{
                      width: 200,
                      height: 200,
                    }}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDiretion: 'row',
                    flexwrap: 'wrap',
                  }}>
                  <Text style={[styles.text]}> {item.name} </Text>
                  <Text style={[styles.text, styles.price]}> ${item.price} </Text>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    marginBottom: 10,
  },

  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
});
