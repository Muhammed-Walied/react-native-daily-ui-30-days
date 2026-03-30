import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_WIDTH } from '../../../config/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
type CustomTextInputProps = {
  placeholder: string;
  placeholderTextColor?: string;
  isPassword?: boolean;
};

const CustomTextInput = ({
  placeholder,
  placeholderTextColor,
  isPassword = false,
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secure, setSecure] = useState(isPassword);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInput, isFocused && { borderColor: '#FFC52A' }]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        secureTextEntry={secure}
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setSecure(!secure)}
        >
          <Ionicons
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={25}
            color="#8B8B8B"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    position: 'relative',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    borderColor: '#7c7c7c',
    padding: 10,
    marginVertical: 5,
    color: '#8B8B8B',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },

  icon: {
    position: 'absolute',
    right: 10,
  },
});
