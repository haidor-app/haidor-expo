import 'expo-dev-client';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { initializeApp } from 'firebase/app';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

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
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
