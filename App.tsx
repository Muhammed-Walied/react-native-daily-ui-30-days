import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './src/routes/Root';

function App() {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}

export default App;
