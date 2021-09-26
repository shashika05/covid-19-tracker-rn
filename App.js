import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { MaterialIcons } from "@expo/vector-icons";

// Screen's
import Home from "./src/Home";
import About from "./src/About";

// Components/Buttons
import AboutButton from "./src/components/buttons/AboutButton";
import BackButton from "./src/components/buttons/BackButton";
import tailwind from "tailwind-rn";

const Stack = createNativeStackNavigator();

function App() {
  const [dataFromApi, setData] = useState({});
  const [localData, setLocalData] = useState({});
  useEffect(() => {
    axios
      .get("https://hpb.health.gov.lk/api/get-statistical-history-data")
      .then((res) => {
        setLocalData({ ...res.data.data[0] });
        // console.log(localData);
      })
      .catch((err) => console.log("localData Error: ", err));
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        setData({ ...response.data.data });
        // console.log(dataFromApi);
      })
      .catch((err) => console.log("dataFromApi Error: ", err));
  }, []);

  const [loaded] = useFonts({
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
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          children={() => (
            <Home localData={localData} dataFromApi={dataFromApi} />
          )}
          name="Home"
          options={{
            headerTitle: () => (
              <View
                style={tailwind("flex flex-row items-center justify-center")}
              >
                <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20 }}>
                  C
                </Text>
                <MaterialIcons
                  name="coronavirus"
                  size={21}
                  color="black"
                  style={{ margin: -3, paddingBottom: 3 }}
                />
                <Text style={{ fontFamily: "PoppinsMedium", fontSize: 20 }}>
                  VID-19 Tracker
                </Text>
              </View>
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
              <Text style={{ fontFamily: "PoppinsMedium", fontSize: 18 }}>
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
