import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieCard = ({ movie }: any) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: movie.Poster }} style={styles.image} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.year}>{movie.Year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  year: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default MovieCard;
