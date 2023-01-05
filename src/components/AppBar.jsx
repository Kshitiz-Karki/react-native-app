import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    flexDirection: 'row',

  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tabText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
       <ScrollView horizontal>
        <AppBarTab title={'Repositories'} path={'/'} />
        <AppBarTab title={'Sign In'} path={'/SignIn'} />
       </ScrollView>
    </View>
  );
};

const AppBarTab = ({ title, path }) => {
  return (
   
      <View style={styles.tabContainer}>
        <Pressable>
          <Link to={path}>
            <Text style={styles.tabText}>
                {title}
            </Text>
          </Link>
        </Pressable>
      </View>
  );
};

export default AppBar;