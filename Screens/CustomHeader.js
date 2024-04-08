import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon, SearchBar } from 'react-native-elements';

const CustomHeader = ({ title, onSearchPress, onInfoPress, searchQuery, handleSearch }) => {
  return (
    <Header
    leftComponent={
      onInfoPress && (
        <Icon name="info" color="#fff" onPress={onInfoPress} />
      )
    }
    centerComponent={
      onSearchPress ? (
        <SearchBar
          // ... search bar options
        />
      ) : (
        <Text style={styles.headerTitle}>{title}</Text>
      )
    }
    rightComponent={
        onAboutPress && (
          <Icon name="account-circle" color="#fff" onPress={onAboutPress} />
        )
      }
    containerStyle={styles.headerContainer}
  />
    // <Header
    //   centerComponent={
    //     onSearchPress ? (
    //       <SearchBar
    //         placeholder="חפש כלי מטבח"
    //         onChangeText={handleSearch}
    //         value={searchQuery}
    //         containerStyle={{ flex: 1, alignItems: 'center' }} // Adjust flex and alignment
    //         inputContainerStyle={{ backgroundColor: 'white', width: '90%' }} // Adjust input container width
    //         inputStyle={{ textAlign: 'right' }}
    //       />
    //     ) : (
    //       <Text style={styles.headerTitle}>{title}</Text>
    //     )
    //   }
    //   containerStyle={styles.headerContainer}
    // />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#7f52c2',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 15,
    justifyContent: 'space-around',
     // Align components vertically
     width: '111%',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default CustomHeader;

////////////
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Header, SearchBar } from 'react-native-elements';

// const CustomHeader = ({ title, onSearchPress, searchQuery, handleSearch }) => {
//   return (
//     <View style={styles.container}>
//       <Header
//         centerComponent={
//           onSearchPress ? (
//             <SearchBar
//               placeholder="חפש כלי מטבח"
//               onChangeText={handleSearch}
//               value={searchQuery}
//               containerStyle={{ width: '100%' }}
//               inputContainerStyle={{ backgroundColor: 'white' }}
//               inputStyle={{ textAlign: 'right' }}
//             />
//           ) : (
//             <Text style={styles.headerTitle}>{title}</Text>
//           )
//         }
//         containerStyle={styles.headerContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 100,
//   },
//   headerContainer: {
//     backgroundColor: '#7f52c2',
//     borderBottomLeftRadius: 60,
//     borderBottomRightRadius: 60,
//     paddingBottom: 15,
//     justifyContent: 'space-around',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

// export default CustomHeader;




// import React, { useState, useEffect}from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { Header, Icon, SearchBar } from 'react-native-elements';

// const CustomHeader = ({ title, onSearchPress, onOptionPressLeft, onOptionPressRight }) => {
//   return (
//     <Header
//       leftComponent={
//         onOptionPressLeft && (
//           <Icon name="menu" color="#fff" onPress={onOptionPressLeft} />
//         )
//       }
//       centerComponent={
//   onSearchPress ? (
//     <SearchBar
//     placeholder="חפש כלי מטבח"
//     onChangeText={handleSearch}
//     value={searchQuery}
//     containerStyle={{ width: '90%' }} // Adjust width as needed
//     inputContainerStyle={{ backgroundColor: 'white' }} // Style for input container
//     inputStyle={{ textAlign: 'right' }} // Align text to right for RTL languages
//   />
//   ) : (
//     <Text style={styles.headerTitle}>{title}</Text>
//   )
// }
//       rightComponent={
//         <>
//           {onSearchPress && (
//             <Icon name="search" color="#fff" onPress={onSearchPress} />
//           )}
//           {onOptionPressRight && (
//             <Icon name="more-vert" color="#fff" onPress={onOptionPressRight} />
//           )}
//         </>
//       }
//       containerStyle={styles.headerContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   headerContainer: {
//     backgroundColor: '#7f52c2', // Adjust background color as needed
//     borderBottomLeftRadius: 60,
//     borderBottomRightRadius: 60,
//     paddingBottom: 15, // Adjust padding as needed
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

// export default CustomHeader;
