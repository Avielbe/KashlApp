
import React, { useState, useEffect } from 'react';
import { View, Text, Button,TouchableOpacity ,FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, Icon, SearchBar } from 'react-native-elements';
import ButtonWithImage from './ButtonWithImage';
import halachotData from '../assets/halachot.json';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredResults = Object.entries(halachotData).filter(([utensil, data]) => {
      return data.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    const sortedData = filteredResults.sort(([a], [b]) => a.localeCompare(b));
    setFilteredData(sortedData);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleNavigateToAbout = () => {
    navigation.navigate('About');
  };

  const handleNavigateToInfo = () => {
    navigation.navigate('Info');
  };

  const handleNavigateToUtensil = (halachotData) => {
    navigation.navigate('UtensilScreen', { halachotData });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Custom Header with Stylish SearchBar */}
      <Header
        containerStyle={[styles.headerContainer, { flex: 1, justifyContent: 'space-between' }]}
        leftComponent={
          <TouchableOpacity onPress={handleNavigateToInfo}>
            <Text style={styles.buttonText}>כללי הכשרה</Text>
          </TouchableOpacity>
        }
        centerComponent={
          <SearchBar
            placeholder="חיפוש" 
            onChangeText={handleSearch}
            value={searchQuery}
            containerStyle={styles.searchContainer} // Custom styles
            inputContainerStyle={styles.searchInputContainer} // Custom styles
            inputStyle={styles.searchInput} // Custom styles
            flex={0.5}
          />
        }
        rightComponent={
          <TouchableOpacity onPress={handleNavigateToAbout}>
            <Text style={styles.buttonText}>אודות</Text>
          </TouchableOpacity>
        }
      />

      {/* Display all ButtonWithImage components */}
      <View style={styles.buttonsContainer}>
        {filteredData.map(([key, value], index) => (
          <ButtonWithImage key={key} halachotData={value} onPress={() => handleNavigateToUtensil(value)} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribute evenly with space between items
    paddingHorizontal: 45, // Add horizontal padding for space from edges
    paddingVertical: 10, // Add vertical padding for space between buttons (optional)
    width: '100%', // Remove width 
  },
  headerContainer: {
    backgroundColor: '#d4a373',
    // backgroundColor: '#7f52c2',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 15,
    justifyContent: 'space-around',
    paddingHorizontal: 26,
    alignItems: 'center',
    
  },
  // Styles for Stylish SearchBar
  searchContainer: {
    flex: 0.5, // 1 Adjust width if needed
    alignItems: 'center',
    backgroundColor: 'transparent', // Remove default background color
     width: '80%',
  },
  searchInputContainer: {
    backgroundColor: 'white', // Set background color
    borderRadius: 10, // Add border radius for rounded corners
    // width: '80%', // Adjust width
    flex: 0.5,
    padding: 3,
    
  },
  searchInput: {
    textAlign: 'left', // Maintain right alignment
    fontSize: 16, // Adjust font size
    color: '#333', // Set text color
  },
  button: {
    // width: '60%', // Adjust this value as needed
    flex: 0.25,
    // Other styles...
  },
  buttonText: {
    fontFamily: 'Heebo',
    fontSize: 18,
    color: '#023047',
    textAlign: 'center',
    
  },
});

export default HomeScreen;
