import React, { useState, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

// Local Cases
import DailyCases from "./components/Home/LocalCases/DailyCases";
import TotalCases from "./components/Home/LocalCases/TotalCases";

// Worldwide Cases
import WDailyCases from "./components/Home/WorldwideCases/WDailyCases";
import WTotalCases from "./components/Home/WorldwideCases/WTotalCases";

export default function Home({ dataFromApi, localData }) {
  const [localToggle, setLocalToggle] = useState(true);
  const [worldwideToggle, setWorldwideToggle] = useState(true);

  // const fadeAnim = useRef(new Animated.Value(0)).current;
  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 3000,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const fadeIn = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 5000,
  //     useNativeDriver: true,
  //   }).start();
  // };

  function localTogglePress() {
    setLocalToggle(!localToggle);
    // Animation - Need to implement
  }

  function worldwideTogglePress() {
    setWorldwideToggle(!worldwideToggle);
    // Animation - Need to implement
  }

  return (
    <ScrollView
      contentContainerStyle={tailwind("items-center justify-center pb-12")}
    >
      <Text
        style={[tailwind("mt-2"), { fontFamily: "PoppinsBold", fontSize: 36 }]}
      >
        Local Cases
      </Text>
      {/* ---- Local Case Toggle ---- */}
      <View
        style={tailwind(
          "flex flex-row items-center justify-center w-1/2 mt-0 h-16"
        )}
      >
        <TouchableOpacity
          style={tailwind(
            `${
              localToggle ? "bg-gray-400" : "bg-gray-300"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-l-xl`
          )}
          onPress={() => localTogglePress()}
        >
          <View style={tailwind("items-center justify-center")}>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Daily Cases</Text>
            <MaterialCommunityIcons
              name={localToggle ? "virus" : "virus-outline"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            `${
              localToggle ? "bg-gray-300" : "bg-gray-400"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-r-xl`
          )}
          onPress={() => localTogglePress()}
        >
          <View style={tailwind("items-center justify-center")}>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Total Cases</Text>
            <MaterialCommunityIcons
              name={!localToggle ? "virus" : "virus-outline"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* ---- View of Local toggle ---- */}
      <Animated.View
        style={[
          tailwind(
            "mt-4 flex flex-row items-center justify-center bg-gray-300 w-3/4 rounded-xl py-4"
          ),
          // { opacity: fadeAnim },
        ]}
      >
        {localToggle ? (
          <DailyCases localData={localData} dataFromApi={dataFromApi} />
        ) : (
          <TotalCases localData={localData} dataFromApi={dataFromApi} />
        )}
      </Animated.View>
      {/* ---- Worldwide Cases */}
      <Text
        style={[tailwind("mt-2"), { fontFamily: "PoppinsBold", fontSize: 36 }]}
      >
        Cases Worldwide
      </Text>
      {/* ---- Worldwide Cases Toggle */}
      <View
        style={tailwind(
          "flex flex-row items-center justify-center w-1/2 mt-0 h-16"
        )}
      >
        <TouchableOpacity
          style={tailwind(
            `${
              worldwideToggle ? "bg-gray-400" : "bg-gray-300"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-l-xl`
          )}
          onPress={() => worldwideTogglePress()}
        >
          <View style={tailwind("items-center justify-center")}>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Daily Cases</Text>
            <MaterialCommunityIcons
              name={worldwideToggle ? "virus" : "virus-outline"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            `${
              worldwideToggle ? "bg-gray-300" : "bg-gray-400"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-r-xl`
          )}
          onPress={() => worldwideTogglePress()}
        >
          <View style={tailwind("items-center justify-center")}>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Total Cases</Text>
            <MaterialCommunityIcons
              name={!worldwideToggle ? "virus" : "virus-outline"}
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[
          tailwind(
            "mt-4 flex flex-row items-center justify-center bg-gray-300 w-3/4 rounded-xl py-4"
          ),
          // { opacity: fadeAnim },
        ]}
      >
        {worldwideToggle ? <WDailyCases /> : <WTotalCases />}
      </Animated.View>
    </ScrollView>
  );
}
