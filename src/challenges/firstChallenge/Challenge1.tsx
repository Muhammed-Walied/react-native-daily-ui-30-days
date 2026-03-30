import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../config/Dimensions';
import CustomTextInput from './components/CustomTextInput';
import Octicons from 'react-native-vector-icons/Octicons';
import GoogleIcon from '../../../assets/svg/google.svg';
import FacebookIcon from '../../../assets/svg/facebook.svg';
import AppleIcon from '../../../assets/svg/apple.svg';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../routes/type';
import ScreensName from '../../config/ScreensName';
type Props = NativeStackScreenProps<RootStackParamList, ScreensName>;

const Challenge1 = ({ navigation }: Props) => {
  const [checked, setChecked] = useState<boolean>(true);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Svg
          preserveAspectRatio="none"
          viewBox="0 0 24 17.9"
          style={styles.svg}
        >
          
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require('../../../assets/images/orange.png')}
          />

          <Path
            d="M0 0H23.926 0 0C0 6 0 12 0 16 4 21 13 15 24.001 10.863V0"
            fill="#e3c53f"
          />
        </Svg>
      </View>
      <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.goBack()}
            activeOpacity={0.9}
          >
            <Ionicons
              name="chevron-back-circle-sharp"
              size={30}
              color="#F8EEC0"
            />
          </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome back</Text>
        <Text style={styles.textDescription}>Login to your account</Text>
      </View>
      <View style={styles.textInputContainer}>
        <CustomTextInput placeholder="Email" placeholderTextColor="#8B8B8B" />
        <CustomTextInput
          placeholder="Password"
          placeholderTextColor="#8B8B8B"
          isPassword
        />
      </View>
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          activeOpacity={0.9}
          onPress={() => setChecked(!checked)}
        >
          <Octicons
            name={checked ? 'check-circle' : 'circle'}
            size={25}
            color={checked ? '#F79515' : '#8B8B8B'}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['transparent', '#FFC52A', '#F79515']}
          style={styles.gradient}
        />
        <Text style={styles.orText}>OR</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#F79515', '#FFC52A', 'transparent']}
          style={styles.gradient}
        />
      </View>
      <View style={styles.socialIconContainer}>
        <GoogleIcon width={30} height={30} />
        <FacebookIcon width={30} height={30} />
        <AppleIcon width={30} height={30} />
      </View>
      <View>
        <Text style={styles.createAccountText}>
          Don't have an account?{' '}
          <Text style={[styles.createAccountText, { color: '#F79515' }]}>
            Create Account
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Challenge1;

const styles = StyleSheet.create({
  container: {},
  svg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.35,
  },
  image: {
    width: '100%',
    height: 350,
    alignSelf: 'center',
  },
  textContainer: {
    alignSelf: 'center',
    padding: 5,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
  },
  textDescription: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  textInputContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rememberMeContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'space-between',
  },
  rememberMeText: {
    color: '#8B8B8B',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
  },
  forgotPasswordText: {
    color: '#F79515',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  button: {
    width: SCREEN_WIDTH * 0.9,
    height: 45,
    backgroundColor: '#F79515',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 20, fontFamily: 'Poppins-Bold' },
  gradient: {
    width: SCREEN_WIDTH * 0.4,
    height: 1,
  },
  socialIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
    marginVertical: 10,
  },
  orContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  orText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 10,
  },
  createAccountText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginTop: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
