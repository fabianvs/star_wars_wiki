import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './CustomButtonStyles';

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
};

function CustomButton({title, onPress}: CustomButtonProps): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

export {CustomButton};
