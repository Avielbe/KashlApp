import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import utensilImages from '../assets/screens'; 
import { Avatar } from 'react-native-elements';

const ButtonWithImage = ({ halachotData }) => {
  const navigation = useNavigation();

 const handlePress = () => {
  navigation.navigate('UtensilScreen', { halachotData }); // Corrected screen name
};

  
  if (!halachotData || !halachotData.name) {
    // Handle case where halachotData is undefined or doesn't have a name property
    return null;
  }

  return (
    <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Avatar
          rounded
          source={utensilImages[halachotData.image]}
          style={styles.avatar}
        />
        <Text style={{fontFamily: 'Heebo', fontSize: 22}}>{halachotData.name}</Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 135,
    height: 135,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ButtonWithImage;



// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import utensilImages from '../assets/screens'; // Adjust path as needed


// const ButtonWithImage = ({ halachotData }) => {
// // const ButtonWithImage = ({ title, onPress }) => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     navigation.navigate('UtensilDetail', { halachotData });
//   };

//   if (!halachotData || !halachotData.name) {
//     // Handle case where halachotData is undefined or doesn't have a name property
//     return null; // Or you can return a placeholder or error message
//   }

//   return (
//     // <TouchableOpacity
//     //   onPress={onPress}
//     //   style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
//     // >
//     //   <Image source={utensilImages[title]} style={{ width: 50, height: 50 }} />
//     //   <Text>{title}</Text>
//     // </TouchableOpacity>
//     // <TouchableOpacity
//     //   title={halachotData.name} // Use tool name from data
//     //   onPress={handlePress}
//     //   style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
//     //   >
//     //   {/* <Image source={{ uri: halachotData.image }} style={{ width: 50, height: 50, marginRight: 10 }} /> */}
//     //   <Text>{halachotData.name}</Text>
//     // </TouchableOpacity>
//     <TouchableOpacity onPress={handlePress} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
//     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//       <Image source={utensilImages[halachotData.image]} style={{ width: 50, height: 50 }} /> {/* Use the image based on utensil name */}
//       <Text>{halachotData.name}</Text>
//     </View>
//   </TouchableOpacity>
//   );
// };

// export default ButtonWithImage;

// const ButtonWithImage = ({ halachotData }) => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     navigation.navigate('UtensilDetail', { halachotData }); // Pass tool data to detail screen
//   };
//   return (
//     <TouchableOpacity
//       title={halachotData.name} // Use tool name from data
//       onPress={handlePress}
//       style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
//     >
//       {/* <Image source={{ uri: halachotData.image }} style={{ width: 50, height: 50, marginRight: 10 }} /> */}
//       <Text>{halachotData.name}</Text>
//     </TouchableOpacity>
//   );
// };

// export default ButtonWithImage;
