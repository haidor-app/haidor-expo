import 'expo-dev-client';
import { ExpoRoot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initializeApp } from 'firebase/app';

import useCachedResources from './hooks/useCachedResources';

const firebaseConfig = {
  apiKey: "AIzaSyDCcjiqeswjCIqqk5LJkDJfGwTJNQDd9go",
  authDomain: "hodor-development-60a50.firebaseapp.com",
  projectId: "hodor-development-60a50",
  storageBucket: "hodor-development-60a50.appspot.com",
  messagingSenderId: "624053831444",
  appId: "1:624053831444:web:505d6a555d8528ebe16401"
}

initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ExpoRoot context={require.context('./app')} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
