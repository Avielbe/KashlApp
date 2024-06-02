


import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation';
import CustomLoading from './Screens/CustomLoading';
import * as Font from 'expo-font';

//// Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
////
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Assistant': require('./assets/fonts/Assistant.ttf'),
          // 'Solitre': require('./assets/fonts/Solitre.ttf'),
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
  //////
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiaHQTzy9NOtak0jlJ0nMIWA5QVWOWII8",
    authDomain: "kashlapp-89820.firebaseapp.com",
    projectId: "kashlapp-89820",
    storageBucket: "kashlapp-89820.appspot.com",
    messagingSenderId: "233758572323",
    appId: "1:233758572323:web:dcde469bd16ffeb9835696",
    measurementId: "G-KCFF9QDXTC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app); 
  const auth = getAuth(app); 
  //////
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
