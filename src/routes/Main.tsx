import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';

import ScreensName from '../config/ScreensName';
import { Challenge1, HomeScreen } from './LazyScreens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
     initialRouteName={ScreensName.Home}
      screenOptions={{headerShown: false, headerShadowVisible: false}}>
       <Stack.Screen
       name={ScreensName.Home} component={HomeScreen}  />
      <Stack.Screen name={ScreensName.Challenge1} component={Challenge1} />
    </Stack.Navigator>
  );
};

export default MainStack;

