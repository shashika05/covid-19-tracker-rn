import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

// Screen's
import Home from "./src/Home";
import About from "./src/About";

// Components/Buttons
import AboutButton from "./src/components/buttons/AboutButton";
import BackButton from "./src/components/buttons/BackButton";

const Stack = createNativeStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    PoppinsThin: require("./assets/Poppins/Poppins-Thin.ttf"),
    // 100 PoppinsThin

    PoppinsThinItalic: require("./assets/Poppins/Poppins-ThinItalic.ttf"),
    // 100 PoppinsThinItalic

    PoppinsExtraLight: require("./assets/Poppins/Poppins-ExtraLight.ttf"),
    // 200 PoppinsExtraLight

    PoppinsExtraLightItalic: require("./assets/Poppins/Poppins-ExtraLightItalic.ttf"),
    // 200 PoppinsExtraLightItalic

    PoppinsItalic: require("./assets/Poppins/Poppins-Italic.ttf"),
    // 400 PoppinsItalic

    PoppinsLight: require("./assets/Poppins/Poppins-Light.ttf"),
    // 300 PoppinsLight

    PoppinsLightItalic: require("./assets/Poppins/Poppins-LightItalic.ttf"),
    // 300 PoppinsLightItalic

    PoppinsRegular: require("./assets/Poppins/Poppins-Regular.ttf"),
    // 400 PoppinsRegular

    PoppinsMedium: require("./assets/Poppins/Poppins-Medium.ttf"),
    // 500 PoppinsMedium

    PoppinsMediumItalic: require("./assets/Poppins/Poppins-MediumItalic.ttf"),
    // 500 PoppinsMediumItalic

    PoppinsSemiBold: require("./assets/Poppins/Poppins-SemiBold.ttf"),
    // 600 PoppinsSemiBold

    PoppinsSemiBoldItalic: require("./assets/Poppins/Poppins-SemiBoldItalic.ttf"),
    // 600 PoppinsSemiBoldItalic

    PoppinsBold: require("./assets/Poppins/Poppins-Bold.ttf"),
    // 700 PoppinsBold

    PoppinsBoldItalic: require("./assets/Poppins/Poppins-BoldItalic.ttf"),
    // 700 PoppinsBoldItalic

    PoppinsExtraBold: require("./assets/Poppins/Poppins-ExtraBold.ttf"),
    // 800 PoppinsExtraBold

    PoppinsExtraBoldItalic: require("./assets/Poppins/Poppins-ExtraBoldItalic.ttf"),
    // 800 PoppinsExtraBoldItalic

    PoppinsBlack: require("./assets/Poppins/Poppins-Black.ttf"),
    // 900 PoppinsBlack

    PoppinsBlackItalic: require("./assets/Poppins/Poppins-BlackItalic.ttf"),
    // 900 PoppinsBlackItalic
  });

  if (!loaded) {
    console.log(error);
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => <Home />}
          name="Home"
          options={{
            headerTitle: () => (
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 18 }}>
                Home
              </Text>
            ),
            headerTitleAlign: "center",
            headerLeft: () => <AboutButton />,
          }}
        />
        <Stack.Screen
          children={() => <About />}
          name="About"
          options={{
            headerLeft: () => <BackButton />,
            headerTitleAlign: "center",
            headerTitle: () => (
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 18 }}>
                About
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
