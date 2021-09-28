import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../constants/colors';

import {
  Landing,
  Home,
  Search,
  Cart,
  Favourite,
  Profile,
  Details,
  Items,
  Success,
  Orboarding,Login,
  Register
} from '../screens/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// context
import { CartContextProvider } from '../context/CartContext';
import { DataContextProvider } from '../context/DataContext';
import { FavouriteContextProvider } from '../context/FavouriteContext';
import { AuthContextProvider } from '../context/AuthContext';
import { OrdersContextProvider } from '../context/Orders.context';

// MainTabs
const Tab = createBottomTabNavigator();
const MainTabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Favourite') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-sharp' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown:false}}/>
      <Tab.Screen name="Search" component={Search} options={{ headerShown: false }}/>
      <Tab.Screen name="Favourite" component={Favourite} options={{ headerShown: false }}/>
      <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>


    
  );
};

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Orboarding" component={Orboarding} />
      <AppStack.Screen name="Landing" component={Landing} />
      <AppStack.Screen name="MainTabs" component={MainTabsScreen} />
      <AppStack.Screen name="Items" component={Items} />
      <AppStack.Screen name="Details" component={Details} />
      <AppStack.Screen name="Success" component={Success} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <OrdersContextProvider>
          <CartContextProvider>
            <FavouriteContextProvider>
              <NavigationContainer>
                <AppStackScreen />
              </NavigationContainer>
            </FavouriteContextProvider>
          </CartContextProvider>
        </OrdersContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  );
};
export default Routes;
