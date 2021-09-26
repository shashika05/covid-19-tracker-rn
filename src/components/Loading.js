import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import tailwind from "tailwind-rn";

export default function Loading() {
  return (
    <View style={tailwind("justify-center items-center")}>
      <LottieView
        style={tailwind("w-52 h-52")}
        source={require("../../assets/loading2.json")}
        autoPlay
        loop
      />
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 16 }}>
        Loading..
      </Text>
    </View>
  );
}
