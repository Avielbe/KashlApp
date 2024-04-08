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
        containerStyle={styles.headerContainer}
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
    flex: 1, // Adjust width if needed
    alignItems: 'center',
    backgroundColor: 'transparent', // Remove default background color
  },
  searchInputContainer: {
    backgroundColor: 'white', // Set background color
    borderRadius: 10, // Add border radius for rounded corners
    width: '90%', // Adjust width
  },
  searchInput: {
    textAlign: 'center', // Maintain right alignment
    fontSize: 16, // Adjust font size
    color: '#333', // Set text color
  },
  button: {
    width: '60%', // Adjust this value as needed
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


///////////
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, ScrollView } from 'react-native';
// import { SearchBar } from 'react-native-elements';
// import { useNavigation } from '@react-navigation/native';
// import ButtonWithImage from './ButtonWithImage';
// import halachotData from '../assets/halachot.json';

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const filteredResults = Object.entries(halachotData).filter(([utensil, data]) => {
//       return data.name.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//     const sortedData = filteredResults.sort(([a], [b]) => a.localeCompare(b)); // Sort by utensil names
//     setFilteredData(sortedData);
//   }, [searchQuery]);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const handleNavigateToAbout = () => {
//     navigation.navigate('About');
//   };

//   const handleNavigateToInfo = () => {
//     navigation.navigate('Info');
//   };

//   const handleNavigateToUtensil = (halachotData) => {
//     navigation.navigate('UtensilScreen', { halachotData });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>This is the Home Screen!</Text>
//       <SearchBar
//         placeholder="חפש כלי מטבח"
//         onChangeText={handleSearch}
//         value={searchQuery}
//         containerStyle={{ width: '90%' }}
//         inputContainerStyle={{ backgroundColor: 'white' }}
//         inputStyle={{ textAlign: 'right' }}
//       />
//       <View style={styles.footer}>
//         <Button title="אודות" onPress={handleNavigateToAbout} />
//         <Button title="Go to Info" onPress={handleNavigateToInfo} />
//       </View>
//       <View style={styles.buttonsContainer}>
//         {filteredData.map(([key, value], index) => (
//           <ButtonWithImage key={key} halachotData={value} onPress={() => handleNavigateToUtensil(value)} />
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around', // Align buttons to the left
//     marginRight: -10, // Add negative margin to create space from the right edge
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default HomeScreen;

////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { Button, Text, View, Image, TextInput, FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import ButtonWithImage from './ButtonWithImage';
// import halachotData from '../';

// function HomeScreen() {
//   const navigation = useNavigation();
  // const [searchQuery, setSearchQuery] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  // console.log("Hi from HomeScreen");
  //   useEffect(() => {
  //   const filteredResults = Object.entries(halachotData).filter(([utensil, data]) => {
  //     return utensil.toLowerCase().includes(searchQuery.toLowerCase());
  //   });
  //   setFilteredData(filteredResults);
  // }, [searchQuery]);

//   const handleNavigateToAbout = () => {
//     navigation.navigate('About');
//   };

//   const handleNavigateToUtensil = (utensilName) => {
//     const utensilData = halachotData[utensilName];
//     navigation.navigate('UtensilDetails', { utensilData: utensilData });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//       <Text>Hello from Home Screen!!</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, paddingHorizontal: 10 }}
//         placeholder="Search Utensil..."
//         onChangeText={(text) => setSearchQuery(text)}
//         value={searchQuery}
//       />
//       <FlatList
//         data={filteredData}
//         renderItem={({ item }) => (
//           <ButtonWithImage
//             key={item[0]}
//             title={item[0]}
//             onPress={() => handleNavigateToUtensil(item[0])}
//           />
//         )}
//         keyExtractor={(item) => item[0]}
//       />
//       <Button title="Go to About" onPress={handleNavigateToAbout} />
//     </View>

//   );
// }

// export default HomeScreen;


// // the previus code:

//   // console.log(halachotData.Tanur); 

//   // const navigation = useNavigation();

//   // const handleNavigateToAbout = () => {
//   //   navigation.navigate('About'); // Navigate to About screen
//   // };

//   // // const handleNavigateToUtensil = (utensil) => {
//   // //   navigation.navigate('UtensilDetails', { utensil });
//   // // };
//   // const handleNavigateToUtensil = (utensilName) => {
//   //   const utensilData = halachotData[utensilName];
//   //   navigation.navigate('UtensilDetails', { utensilData: utensilData });
//   // };
  
//   // //////
//   // const handleNavigateToScreenOne = () => {
//   //   navigation.navigate('ScreenOne'); // Navigate to About screen
//   // };
//   // const handleNavigateToScreenTwo = () => {
//   //   navigation.navigate('ScreenTwo'); // Navigate to About screen
//   // };
//   ////
// //   return (
//     // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//     //   <Text>Hello from Home Screen!!</Text>
//     //   <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
//     //     <Button title="Go to About" onPress={handleNavigateToAbout} />
        
//     //     <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
//     //       {Object.entries(halachotData).map(([utensil, data]) => (
//     //         <ButtonWithImage
//     //           key={utensil}
//     //           title={utensil}
//     //           onPress={() => handleNavigateToUtensil(utensil)}
//     //         />
//     //       ))}
//     //     </View>

//     //   </View>

//     // </View>
//     //   );
// // }

// // export default HomeScreen;
