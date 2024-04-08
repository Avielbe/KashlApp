import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'; 
import AboutScreen from './Screens/AboutScreen';
import Info from './Screens/InfoScreen';
import UtensilScreen from './Screens/UtensilScreen';
import CustomHeader from './Screens/CustomHeader';
import CustomHeaderMini from './Screens/CustomHeaderMini';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide the header for HomeScreen
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          header: (props) => <CustomHeaderMini {...props} title="אודות" />,
        }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{ 
          header: (props) => <CustomHeaderMini {...props} title="כללי הכשרה" />,        }}
      />
      <Stack.Screen
        name={"UtensilScreen"}  // Use the correct component name
        component={UtensilScreen}
        options={({ route }) => ({
          header: (props) => <CustomHeaderMini {...props} title={route.params?.utensilData?.name ?? 'הכשרת כלים'} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

/////////
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './Screens/HomeScreen'; 
// import AboutScreen from './Screens/AboutScreen';
// import Info from './Screens/InfoScreen';
// import UtensilScreen from './Screens/UtensilScreen';
// import CustomHeader from './Screens/CustomHeader';
// import CustomHeaderMini from './Screens/CustomHeaderMini';
// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   const handleHomePress = () => {
//     // Handle navigation back to Home screen (adjust if needed)
//     navigation.navigate('Home');
//   };

  
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           header: (props) => <CustomHeader {...props} title="Home" />, // Pass any necessary props to WavyHeader
//         }}
//       />
//       <Stack.Screen
//         name="About"
//         component={AboutScreen}
//         options={{
//           header: (props) => <CustomHeaderMini {...props} title="אודות" />,
//         }}
//       />
//       <Stack.Screen
//         name="Info"
//         component={Info}
//         options={{ title: 'כללים' }}
//       />
//       <Stack.Screen
//         name={"UtensilScreen"}  // Use the correct component name
//         component={UtensilScreen}
//         options={({ route }) => ({
//           header: (props) => <CustomHeaderMini {...props} title={route.params?.utensilData?.name ?? 'הכשרת כלים'} />,
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
/////////////


// import React from 'react';
// import { Button, Image, Text, View } from 'react-native';


// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './Screens/HomeScreen'; // Adjust path as needed
// // import AboutScreen from './Screens/AboutScreen'; // Adjust path as needed
// // import ScreenOne from './Screens/ScreenOne';
// // import ScreenTwo from './Screens/ScreenTwo';
// // import UtensilScreen from './Screens/UtensilScreen';


// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: 'מסך ראשי' }}
//       />

//       {/* <Stack.Screen
//         name="ScreenOne"
//         component={ScreenOne}
//         options={{ title: 'ScreenOne' }}
//       />
//       <Stack.Screen
//         name="ScreenTwo"
//         component={ScreenTwo}
//         options={{ title: 'ScreenTwo' }}
//       />
//       <Stack.Screen
//         name="UtensilDetails"
//         component={UtensilScreen}
//         // options={{ title: 'Utensil Details' }}
//         options={({ route }) => ({ title: route.params.utensilData.name })}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
