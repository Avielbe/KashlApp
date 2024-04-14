
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
const CustomHeaderMini = ({ title, onOptionPressLeft, onOptionPressRight }) => {
  const navigation = useNavigation(); // Get the navigation prop

  return (
    <Header
      rightComponent={
        <>
        {onOptionPressRight && (
          <Icon name="more-vert" color="#fff" onPress={onOptionPressRight} />
        )}
      </>
      }
      centerComponent={{ text: title, style: styles.headerTitle }}
      leftComponent={
        <Icon name="arrow-back" color="#fff" onPress={() => navigation.goBack()} /> // Add back button
      }
      containerStyle={styles.headerContainer}
    />
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#d4a373', // Adjust background color as needed
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 15, // Adjust padding as needed
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

export default CustomHeaderMini;

//////////////

