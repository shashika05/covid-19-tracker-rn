import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screen's
import Home from "./src/Home";
import About from "./src/About";

// Components
import AboutButton from "./src/components/AboutButton";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => <Home />}
          name="Home"
          options={{
            headerTitle: "Home",
            headerLeft: () => <AboutButton />,
          }}
        />
        <Stack.Screen
          children={() => <About />}
          name="About"
          options={{
            headerTitle: "About",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
