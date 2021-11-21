# How to remove 'Warning: Async Storage has been extracted from react-native core

In present moment (21/11/2021), when add Firebase to your Expo Project, you will get a warning:

AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'.

if the warning has not yet been resolved in the firebase package, follow the steps below to remove the warning:

1. Search for AsyncStorage in your node_modules/@firebase folder.
2. Replace all the AsyncStorage with AsyncStorage from '@react-native-async-storage/async-storage'

Example:

```js
require('react-native').AsyncStorage; => require('@react-native-async-storage/async-storage').AsyncStorage;

import AsyncStorage from 'react-native'; => import AsyncStorage from '@react-native-async-storage/async-storage';
```

restart your app and the warning will be gone.
