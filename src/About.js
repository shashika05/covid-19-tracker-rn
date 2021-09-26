import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function About() {
  return (
    <View style={tailwind("items-center justify-center")}>
      <Text>About.js</Text>
    </View>
  );
}
