import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ClockPage1 from "./screens/ClockPage1";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";
import MemoryPage1 from "./screens/MemoryPage1";
import MemoryPage2 from "./screens/MemoryPage2";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
      
        <Stack.Screen name="Clock1" component={ClockPage1} />

      
        <Stack.Screen name="Page2" component={Page2} />

   
        <Stack.Screen name="Page3" component={Page3} />

    
        <Stack.Screen name="Memory1" component={MemoryPage1} />

    
        <Stack.Screen name="Memory2" component={MemoryPage2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
