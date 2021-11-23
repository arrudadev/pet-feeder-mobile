import React, { createContext, ReactNode, useState } from 'react';
import { Alert } from 'react-native';

import * as Google from 'expo-google-app-auth';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';

import { getEnvVars } from '../../environment';
import { Spinner } from '../components/Spinner';
import { auth } from '../services/firebase';

type UserContextData = {
  userName: string;
  userEmail: string;
  userPhotoUrl: string;
  token: string;
  googleLogin: () => Promise<void>;
};

export const UserContext = createContext({} as UserContextData);

const { androidClientId } = getEnvVars();

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhotoUrl, setUserPhotoUrl] = useState('');
  const [token, setToken] = useState('');

  const [loading, setLoading] = useState(false);

  async function googleLogin() {
    try {
      setLoading(true);

      const result = await Google.logInAsync({
        clientId: androidClientId,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        const credential = GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken,
        );

        signInWithCredential(auth, credential);

        const currentUserToken = await auth.currentUser?.getIdToken(true);

        setUserName(result.user.name || '');
        setUserEmail(result.user.email || '');
        setUserPhotoUrl(result.user.photoUrl || '');
        setToken(currentUserToken || '');

        await AsyncStorage.setItem('@PetFeeder-Token', currentUserToken || '');

        setLoading(false);

        navigation.dispatch(CommonActions.navigate({ name: 'Home' }));
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  }

  return (
    <UserContext.Provider
      value={{
        userName,
        userEmail,
        userPhotoUrl,
        token,
        googleLogin,
      }}
    >
      {children}

      <Spinner visible={loading} />
    </UserContext.Provider>
  );
};
