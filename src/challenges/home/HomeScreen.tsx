import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { SCREEN_WIDTH } from '../../config/Dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/type';
import ScreensName from '../../config/ScreensName';

type Props = NativeStackScreenProps<RootStackParamList, ScreensName>;
const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Daily UI Challenges</Text>
      </View>
      <View style={styles.boxDirection}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreensName.Challenge1)}
          activeOpacity={0.9}
          style={styles.boxContainer}
        >
          <Text style={styles.boxTitle}>Challenge 1</Text>
          <Text style={styles.boxDescription}>(Login Screen)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreensName.Challenge1)}
          activeOpacity={0.9}
          style={styles.boxContainer}
        >
          <Text style={styles.boxTitle}>Challenge 2</Text>
          <Text style={styles.boxDescription}>()</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    color: '#ff6766',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  boxContainer: {
    width: SCREEN_WIDTH * 0.35,
    height: SCREEN_WIDTH * 0.35,
    backgroundColor: '#ff6766',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  boxDescription: {
    fontSize: 12,
    color: '#fff',
  },
  boxDirection: {
    flexDirection: 'row', justifyContent: 'space-around'
  },
});
