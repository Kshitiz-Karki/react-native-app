import Text from './Text';
import { Pressable, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import repoItemStyles from '../styles';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={theme.container}>
      <FormikTextInput name="username" placeholder="Username" style={repoItemStyles.input} />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={repoItemStyles.input} />  
      <View style={repoItemStyles.signInButton}>
        <Pressable onPress={onSubmit}>
          <Text style={repoItemStyles.signInText}>Sign In</Text>
        </Pressable>
        </View>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = values => {
   console.log('values - ', values);
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}

    </Formik>
  );
};

export default SignIn;