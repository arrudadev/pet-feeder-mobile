import Constants from 'expo-constants';

const ENV = {
  development: {
    androidClientId: '',
    firebaseAppApiKey: '',
    firebaseAppAuthDomain: '',
    firebaseAppProjectId: '',
    firebaseAppStorageBucket: '',
    firebaseAppMessagingSenderId: '',
    firebaseAppAppId: '',
  },
  staging: {
    androidClientId: '',
    firebaseAppApiKey: '',
    firebaseAppAuthDomain: '',
    firebaseAppProjectId: '',
    firebaseAppStorageBucket: '',
    firebaseAppMessagingSenderId: '',
    firebaseAppAppId: '',
  },
  production: {
    androidClientId: '',
    firebaseAppApiKey: '',
    firebaseAppAuthDomain: '',
    firebaseAppProjectId: '',
    firebaseAppStorageBucket: '',
    firebaseAppMessagingSenderId: '',
    firebaseAppAppId: '',
  },
};

export const getEnvVars = (env = Constants?.manifest?.releaseChannel): any => {
  let environment;
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  // eslint-disable-next-line
	if (__DEV__) {
    environment = ENV.development;
  }
  if (env === 'staging') {
    environment = ENV.staging;
  }
  if (env === 'production') {
    environment = ENV.production;
  }
  return environment;
};
