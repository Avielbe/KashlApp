

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen'; 
import AboutScreen from './Screens/AboutScreen';
import Info from './Screens/InfoScreen';
import UtensilScreen from './Screens/UtensilScreen';
// import CustomHeader from './Screens/CustomHeader';
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
