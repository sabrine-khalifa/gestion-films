import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';
import { RootState } from '../reducers/movieReducer'; // Assurez-vous d'avoir défini RootState

const SearchScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies);
  const error = useSelector((state: RootState) => state.error);

  const handleSearch = () => {
    dispatch(fetchMovies(title));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter movie title..."
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Search" onPress={handleSearch} />
      {error && <Text>{error}</Text>}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { id: item.imdbID })}>
            <Text>{item.Title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;
