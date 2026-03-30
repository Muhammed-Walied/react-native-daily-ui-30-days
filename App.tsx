import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/routes/Root';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

export default App;

