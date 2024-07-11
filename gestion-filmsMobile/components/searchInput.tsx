import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchInput = ({ title, setTitle, handleSearch }: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez le titre du film..."
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default SearchInput;
