import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  greyBorder: {
    borderColor: 'grey',
  },
  redBorder: {
    borderColor: '#d73a4a',
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    style,
    error ? styles.redBorder : styles.greyBorder,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;