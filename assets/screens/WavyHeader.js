import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WavyHeader = ({ title, onPressHome }) => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{title}</Text>
          {/* Home button (adjust position and style as needed) */}
          <Text style={styles.homeButton} onPress={onPressHome}>
            Home
          </Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#fff', // Adjust background color
      borderRadius: 20, // Adjust for desired rounded corners
      padding: 10,
      alignItems: 'center', // Center content horizontally
      justifyContent: 'space-between', // Distribute content horizontally
      shadowColor: '#ddd', // Shadow color for neumorphism
      shadowOffset: { width: 0, height: 4 }, // Adjust shadow offset
      shadowOpacity: 0.3, // Adjust shadow opacity
      shadowRadius: 5, // Adjust shadow blur radius
      elevation: 3, // Adjust elevation for depth effect
    },
    headerContent: {
      flexDirection: 'row', // Arrange elements in a row
    },
    headerText: {
      color: '#333', // Text color
      fontSize: 20, // Adjust font size
      fontWeight: 'bold', // Adjust font weight
    },
    homeButton: {
      color: '#333', // Home button text color
      fontSize: 16, // Adjust font size
      fontWeight: 'bold', // Adjust font weight
    },
  });
  
export default WavyHeader;
