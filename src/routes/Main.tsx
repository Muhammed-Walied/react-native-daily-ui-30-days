import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';

import ScreensName from '../config/ScreensName';
import { FirstChallengeScreen } from './LazyScreens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerShadowVisible: false}}>
      <Stack.Screen name={ScreensName.FirstChallenge  } component={FirstChallengeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
