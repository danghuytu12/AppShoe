import React, { useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FavouriteContext } from '../context/FavouriteContext';

export const Favourite = ({ navigation }) => {
  const { favData, setFavData } = useContext(FavouriteContext);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white'
      }}>
      <ScrollView>
        <View style={styles.container}>
          {favData.length > 0 ? (
            <View>
              <Text style={styles.heading}> Saved Items</Text>
              {favData.map((item, index) => {
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

                      </View>
                    </View>



                  </View>
                );
              })}

              {/* clear fav */}
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#FF3366', width: 180, height: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}
                  onPress={() => setFavData([])}>
                  <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bolds' }}> Clear Favourite </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.heading}>Saved Items</Text>

              {/* text wrapper */}
              <View
                style={{
                  marginBottom: 20,
                }}>
                <Text
                  style={[
                    styles.text,
                    { textAlign: 'center', marginBottom: 20 },
                  ]}>
                  {' '}
                  Noting Saved yet{' '}
                </Text>

                <Text
                  style={[
                    styles.text,
                    {
                      textAlign: 'center',
                    },
                  ]}>
                  {' '}
                  No Worries start by saving items by clicking the little heart
                  icon
                </Text>
              </View>

              {/* continue shopping cta */}
              <View>
                <TouchableOpacity
                  style={styles.btn}
                  // go to home screen
                  onPress={() => {
                    navigation.navigate('Home');
                  }}>
                  <Text style={[styles.text, styles.btnText]}>
                    {' '}
                    Start Shopping{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btn: {
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
