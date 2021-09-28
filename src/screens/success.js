import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Icon
          name="checkmark-done-outline"
          size={50}
          color="green"
          style={styles.bottomSpacer}
        />

        <Text style={styles.text}> Awecome Order Placed!!!</Text>
      </View>

      {/* continue shopping view */}

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}
          >
          <Text style={styles.btnText}> Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  bottomSpacer: {
    marginBottom: 20,
  },

  btn: {
    backgroundColor: 'black',
    padding: 20,
  },
  btnText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
  },
});
