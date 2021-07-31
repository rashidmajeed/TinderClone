import React from 'react';
import { Text, ImageBackground, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
     <ImageBackground 
     source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}} 
     style={styles.image}>
    <View style={styles.cardInner}>
    <Text style={styles.name}>Jeffrey Bezos</Text>
    <Text style={styles.bio}>CEO AWS Cloud Provider a world's richest person, entrepreneur born in 1964, belongs to USA</Text>
    </View>
    </ImageBackground>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    width: '95%',
    height: '80%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
   width: '100%',
   height: '100%',
   borderRadius: 10,
   overflow: 'hidden',
   justifyContent: 'flex-end'
  },
  cardInner: {
    padding : 10
  },
  name: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  },
  bio: {
    fontSize: 16,
    color: 'white',
    lineHeight: 25
  }
})
export default App;