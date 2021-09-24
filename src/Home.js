import React, { useEffect, useState, useRef } from "react";
import { Text, TouchableOpacity, View, Animated } from "react-native";
import tailwind from "tailwind-rn";
import axios from "axios";

import DailyCases from "./components/Home/DailyCases";
import TotalCases from "./components/Home/TotalCases";

export default function Home() {
  const [dataFromApi, setData] = useState({});
  const [localData, setLocalData] = useState({});
  const [dailyCasesToggle, setDailyCasesToggle] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => setDailyCasesToggle(!dailyCasesToggle));
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const fadeIn = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  function dailyCasePress() {
    // setDailyCasesToggle(true);

    // Animation
    fadeOut();
    // fadeIn();
  }
  function totalCasePress() {
    // setDailyCasesToggle(false);

    // Animation
    fadeOut();
    // fadeIn();
  }

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
  return (
    <View style={tailwind("items-center justify-center")}>
      {/* ---- Case Toggle ---- */}
      <View
        style={tailwind(
          "flex flex-row items-center justify-center w-1/2 mt-8 h-16"
        )}
      >
        <TouchableOpacity
          style={tailwind(
            `${
              dailyCasesToggle ? "bg-gray-400" : "bg-gray-300"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-l-xl`
          )}
          onPress={() => dailyCasePress()}
        >
          <View>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Daily Cases</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tailwind(
            `${
              dailyCasesToggle ? "bg-gray-300" : "bg-gray-400"
            } flex flex-row items-center justify-center h-16 w-1/2 rounded-r-xl`
          )}
          onPress={() => totalCasePress()}
        >
          <View>
            <Text style={{ fontFamily: "PoppinsMedium" }}>Total Cases</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* ---- View of toggle ---- */}
      <Animated.View
        style={[
          tailwind(
            "mt-4 flex flex-row items-center justify-center bg-gray-300 w-3/4 h-64 rounded-xl"
          ),
          { opacity: fadeAnim },
        ]}
      >
        {dailyCasesToggle ? (
          <DailyCases localData={localData} />
        ) : (
          <TotalCases localData={localData} dataFromApi={dataFromApi} />
        )}
      </Animated.View>
    </View>
  );
}
