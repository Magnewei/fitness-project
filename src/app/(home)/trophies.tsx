import { useUser } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Trophy, trophyMap } from '../../config/trophyCollection';

const TrophyComponent = ({ trophy }: { trophy: Trophy }) => {
  return (
    <View>
      <Text>{trophy.title}</Text>
      <Text>{trophy.description}</Text>
      <Text>{trophy.points}</Text>
      <Image
        source={trophy.icon}
        style={styles.image}
        onError={() => console.log('Error loading image')}
      />
    </View>
  );
};

const Trophies = ({ trophyMap }: { trophyMap: Map<string, Trophy[]> }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {Array.from(trophyMap.entries()).map(([category, trophies]) => (
          <View key={category}>
            <Text style={styles.title}>{category}</Text>
            {trophies.map((trophy) => (
              <View key={trophy.id}>
                <TrophyComponent trophy={trophy} />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const TrophyMenu = () => {
  const user = useUser();
  return <Trophies trophyMap={trophyMap} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
  },
});

export default TrophyMenu;
