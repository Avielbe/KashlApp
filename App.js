import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation';
import CustomLoading from './Screens/CustomLoading';
import * as Font from 'expo-font';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Assistant': require('./assets/fonts/Assistant.ttf'),
          'Solitre': require('./assets/fonts/Solitre.ttf'),
          'Heebo': require('./assets/fonts/Heebo.ttf'),
        });
      } catch (error) {
        console.error('Error loading fonts:', error);
        // Handle error, possibly by falling back to default fonts
      }
      setIsLoading(false); // Set loading state to false after fonts are loaded or failed to load
    }
    
    loadFonts(); // Call the loadFonts function

    // Cleanup function to clear the timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CustomLoading />;
  }

  console.log("App.js rendered");

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//////
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './navigation';
// import CustomLoading from './Screens/CustomLoading';
// import * as Font from 'expo-font';

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function loadFonts() {
//       try {
//         await Font.loadAsync({
//           'Assistant': require('./assets/fonts/Assistant.ttf'),
//           'Solitre': require('./assets/fonts/Solitre.ttf'),
//           'Heebo': require('./assets/fonts/Heebo.ttf'),
//         });
//       } catch (error) {
//         console.error('Error loading fonts:', error);
//         // Handle error, possibly by falling back to default fonts
//       }
//     }
    
//     // async function loadFonts() {
//     //   await Font.loadAsync({
//     //     'Assistant': require('./assets/fonts/Assistant.ttf'),
//     //     'Solitre': require('./assets/fonts/Solitre.ttf'),
//     //     'Heebo': require('./assets/fonts/Heebo.ttf'),
//     //   });
//     }

//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);

//     // Call the loadFonts function
//     loadFonts();

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <CustomLoading />;
//   }

//   console.log("App.js rendered");

//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>  
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

/////////////////////
// import React, {useState, useEffect} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './navigation';

// import { I18nManager } from 'react-native';
// I18nManager.allowRTL(true);
// I18nManager.forceRTL(true);
// // import AppLoading from 'expo-app-loading';
// // import { SplashScreen } from 'expo';
// import CustomLoading from './Screens/CustomLoading';
// import * as SplashScreen from 'expo-splash-screen';

// import * as Font from 'expo-font';

// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);

//   useEffect(() => {
//     async function loadFonts() {
//       await Font.loadAsync({
//         'Assistant': require('./assets/fonts/Assistant.ttf'),
//         'Solitre': require('./assets/fonts/Solitre.ttf'),
//         'Heebo': require('./assets/fonts/Heebo.ttf'),      });
//     }

//     async function loadData() {
//       try {
//         await SplashScreen.preventAutoHideAsync();
//         await loadFonts();
//         setFontsLoaded(true);
//         await SplashScreen.hideAsync();
//       } catch (error) {
//         console.warn(error);
//       }
//     }

//     loadData();
//   }, []);

//   if (!fontsLoaded) {
//     return <View />;
//   }
//   console.log("App.js renderd");
//   return (
//       <NavigationContainer>
//         <AppNavigator />
//       </NavigationContainer>  
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// // import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useEffect } from 'react';
// import { SplashScreen } from 'expo';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!e!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
