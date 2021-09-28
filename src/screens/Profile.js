import React, { useContext } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Login } from '../components/Login/Login.component';
import { AuthContext } from '../context/AuthContext';
import { UserProfile } from '../components/UserProfile/UserProfile.component';

export const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <View>{user ? <UserProfile /> : <Login />}</View>
    </SafeAreaView>
  );
};
