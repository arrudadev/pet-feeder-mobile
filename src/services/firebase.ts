import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { getEnvVars } from '../../environment';

const {
  firebaseAppApiKey,
  firebaseAppAuthDomain,
  firebaseAppProjectId,
  firebaseAppStorageBucket,
  firebaseAppMessagingSenderId,
  firebaseAppAppId,
} = getEnvVars();

const firebaseConfig = {
  apiKey: firebaseAppApiKey,
  authDomain: firebaseAppAuthDomain,
  projectId: firebaseAppProjectId,
  storageBucket: firebaseAppStorageBucket,
  messagingSenderId: firebaseAppMessagingSenderId,
  appId: firebaseAppAppId,
};

initializeApp(firebaseConfig);

export const auth = getAuth();
