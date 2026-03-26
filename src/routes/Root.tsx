import React, {Suspense} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Main';
import { Text } from 'react-native';



const RootStack = () => {


  return (
    <NavigationContainer>
      <Suspense fallback={<Text>Loading...</Text>}>
       <MainStack /> 
      </Suspense>
    </NavigationContainer>
  );
};

export default RootStack;
