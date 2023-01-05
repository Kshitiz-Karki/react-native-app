import { View, Image, StyleSheet } from 'react-native';
import repoItemStyles from '../styles';

import formatInThousands from '../utils/formatInThousands';
import Text from './Text';

const styles = StyleSheet.create(repoItemStyles);

const RepositoryItem = ({repository}) => {
  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ 
            uri: `${repository.ownerAvatarUrl}`,
          }}
        />
      </View>

      <View style={styles.contentContainer}>

        <Text 
          style={styles.nameText}
          >
          {repository.fullName}
          </Text>

        <Text
            style={styles.descriptionText}
            color="textSecondary"
          >
            {repository.description}
          </Text>  

      
          {repository.language ? (
            <View style={styles.languageContainer}>
              <Text
                style={styles.languageText}>
                {repository.language}
              </Text>
            </View>
          ) : null}
       </View>
    </View>

     <View style={styles.bottomContainer}>
        <CountItem count={repository.stargazersCount} label="Stars" />
        <CountItem count={repository.forksCount} label="Forks" />
        <CountItem count={repository.reviewCount} label="Reviews" />
        <CountItem count={repository.ratingAverage} label="Rating" />
      </View>
      </View>
  );
};

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default RepositoryItem;