import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../actions/movieActions';

const MovieDetailScreen = ({ route }: any) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const { movieDetails, error } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Image source={{ uri: movieDetails.Poster }} style={styles.image} />
          <Text style={styles.title}>{movieDetails.Title}</Text>
          <Text style={styles.year}>{movieDetails.Year}</Text>
          <Text style={styles.plot}>{movieDetails.Plot}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  year: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  plot: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default MovieDetailScreen;
