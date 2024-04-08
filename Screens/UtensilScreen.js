import React, { useState } from 'react';
import { I18nManager, View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Icon, Divider, CheckBox } from 'react-native-elements';
import utensilImages from '../assets/screens';

function UtensilScreen({ route }) {
  const { halachotData } = route.params || {};

  if (!halachotData) {
    return null;
  }

  const descriptions = ['description1', 'description2', 'description3', 'description4', 'description5'].map(desc => halachotData[desc]).filter(Boolean);
  const [checkedItems, setCheckedItems] = useState(Array(descriptions.length).fill(false));

  const handleCheckBoxClick = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const descriptionEdot = ['descriptionEDOT1', 'descriptionEDOT2'].map(desc => halachotData[desc]).filter(Boolean);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{halachotData.name}</Text>

      <Image source={utensilImages[halachotData.image]} style={styles.image} />

      {/* Render descriptions */}
   
      <Text style={styles.subtitle}>צורת ההכשרה:</Text>
      {descriptions.map((desc, index) => (
        <View key={index} style={styles.descriptionRow}>
          <CheckBox
            checked={checkedItems[index]}
            onPress={() => handleCheckBoxClick(index)}

          />
          <View style={styles.descriptionTextContainer}>
            <Text style={[
                styles.descriptionText,
                checkedItems[index] ? { textDecorationLine: 'line-through' } : null
              ]}
            >
              {`${desc.trim()}`}
            </Text>
          </View>
        </View>
      ))}


    {/* Render descriptionEdot if it has content */}
    {descriptionEdot.length > 0 && (
      <>
        <Text style={styles.subtitle}>מנהגים ועדות:</Text>
        {descriptionEdot.map((desc, index) => (
          <Text style={styles.descriptionEdot} key={index}>{`• ${desc.trim()}`}</Text>
        ))}
      </>
    )}

      {halachotData.notes && (
        <View>
          <Divider style={styles.divider} />
          <Text style={styles.notesTitle}>הערות:</Text>
          <Text style={styles.notesText}>{halachotData.notes}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Heebo',
    alignSelf: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    fontFamily: 'Heebo',
    marginTop: 20,
  },
  descriptionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionTextContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  descriptionText: {
    fontSize: 18,
    textDecorationLine: 'none',
    fontFamily: 'Heebo',
    textAlign: 'left',
    alignSelf: 'stretch'

  },

  descriptionEdot: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Heebo',
    marginBottom: 6,
    textAlign: 'left',
  },
  divider: {
    backgroundColor: '#ccc',
  },
  notesTitle: {
    textAlign: 'center',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  notesText: {
    textAlign: 'left',
    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
});

export default UtensilScreen;

/////
// import React, { useState } from 'react';
// import { I18nManager, View, Text, Image } from 'react-native';
// import { ListItem, Icon, Divider, CheckBox } from 'react-native-elements';
// import utensilImages from '../assets/screens';

// function UtensilScreen({ route }) {
//   const { halachotData } = route.params || {};

//   if (!halachotData) {
//     return null;
//   }

//   const descriptions = ['description1', 'description2', 'description3', 'description4', 'description5'].map(desc => halachotData[desc]).filter(Boolean);
//   const [checkedItems, setCheckedItems] = useState(Array(descriptions.length).fill(false));

//   const handleCheckBoxClick = (index) => {
//     const newCheckedItems = [...checkedItems];
//     newCheckedItems[index] = !newCheckedItems[index];
//     setCheckedItems(newCheckedItems);
//   };

//   const descriptionEdot = ['descriptionEDOT1', 'descriptionEDOT2'].map(desc => halachotData[desc]).filter(Boolean);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 20 }}>
//       <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, fontFamily: 'Heebo', alignSelf: 'center' }}>{halachotData.name}</Text>

//       <Image source={utensilImages[halachotData.image]} style={{ width: 200, height: 200,borderRadius: 50, alignSelf: 'center' }} />

//       {/* Render descriptions */}
   
//       <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, fontFamily: 'Heebo' }}>צורת ההכשרה:</Text>
//       {descriptions.map((desc, index) => (
//         <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <CheckBox
//             checked={checkedItems[index]}
//             onPress={() => handleCheckBoxClick(index)}
//           />
//           <View style={{ flex: 1, alignItems: 'flex-start' }}>
//             <Text style={{ fontSize: 18, textDecorationLine: checkedItems[index] ? 'line-through' : 'none', fontFamily: 'Heebo', textAlign: 'right' }}>{`${index + 1}. ${desc.trim()}`}</Text>
//           </View>
//         </View>
//       ))}


//     {/* Render descriptionEdot if it has content */}
//     {descriptionEdot.length > 0 && (
//       <>
//         <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, marginTop: 20, fontFamily: 'Heebo' }}>מנהגים ועדות:</Text>
//         {descriptionEdot.map((desc, index) => (
//           <Text style={{ fontSize: 18, lineHeight: 24 ,fontFamily: 'Heebo', marginBottom:6, textAlign: 'left' }} key={index}>{`• ${desc.trim()}`}</Text>
//         ))}
//       </>
//     )}

//       {halachotData.notes && (
//         <View>
//           <Divider style={{ backgroundColor: '#ccc' }} />
//           <Text style={{ textAlign: 'center', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' }}>:הערות</Text>
//           <Text style={{ textAlign: 'left', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' }}>{halachotData.notes}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// export default UtensilScreen;



///the font part:
 
  // If there is a problem with fonts add this code:
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // // Define a function to load fonts
  // async function loadFonts() {
  //   await Font.loadAsync({
  //     'Assistant': require('../assets/fonts/Assistant.ttf'),
  //     'Solitre': require('../assets/fonts/Solitre.ttf'),
  //     'Heebo': require('../assets/fonts/Heebo.ttf'),
  //     // Add more font weights or styles if needed
  //   });
  //   setFontsLoaded(true);
  // }

  // // Call the function to load fonts only once
  // useEffect(() => {
  //   loadFonts();
  // }, []);
  // if (!fontsLoaded) {
  //   return null; // Render nothing until fonts are loaded
  // }
  ////finish font
//
{/* <Text h1 style={{ textAlign: 'right', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' }}>{halachotData.name}</Text>
<Text style={{ textAlign: 'center', writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' }}>{halachotData.name}</Text>
// */}
// import React, {useEffect, useState} from 'react';
// import { View, Text, Image } from 'react-native';
// import utensilImages from '../assets/screens'; 
// import { Header, Divider, TextList, ListItem, Icon, Card,CheckBox } from 'react-native-elements'; // Import components
// import * as Font from 'expo-font';


// function UtensilScreen({ route }) {
//   const { halachotData } = route.params;
//   const [fontLoaded, setFontLoaded] = useState(false); // State to track font loading

//   useEffect(() => {
//     // Load font async
//     async function loadFont() {
//       await Font.loadAsync({
//         'Assistant': require('../assets/fonts/Assistant.ttf'),
//       });
//       setFontLoaded(true); // Set fontLoaded to true when font is loaded
//     }

//     // Call the function to load font
//     loadFont();
//   }, []); // Ensure this runs only once

//   // Render nothing if font is not loaded
//   if (!fontLoaded) {
//     return null;
//   }


//   return (
    
//     <View style={{ flex: 1, alignItesms: 'center', justifyContent: 'center', paddingHorizontal: 20 }}>


//       <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, fontFamily: 'Assitant' }}>{utensilData.name}</Text> 
//       <Text h1>{utensilData.name}</Text>
//       <Text>{utensilData.name}</Text>
//       <Image source={utensilImages[utensilData.image]} style={{ width: 200, height: 200, alignSelf: 'center' }} />
//       <Text>{utensilData.description}</Text>
//       {/* <Image source={require(`../assets/screens/${utensilData.name}.jpeg`)} style={{ width: 50, height: 50 }} /> */}
//       <Text>{utensilData.notes}</Text>

//       <View style={{ marginBottom: 20 }}>
//         {utensilData.description.split('.').map((item, index) => (
//           <ListItem key={index} bottomDivider>
//             <Icon name='check' type='material' size={24} color='#517fa4' />
//             <ListItem.Content>
//               <ListItem.Title>{`${index + 1}. ${item.trim()}`}</ListItem.Title>
//             </ListItem.Content>
//           </ListItem>
//         ))}
//       </View>

//       {utensilData.notes && (
//         <View>
//           <Divider style={{ backgroundColor: '#ccc' }} />
//           <Text>הערות:</Text>
//           <Text>{utensilData.notes}</Text>
//         </View>
//       )}

//       </View>

    
//   );
// }

// export default UtensilScreen;
