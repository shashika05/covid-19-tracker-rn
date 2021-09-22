import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function AboutButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("About")}>
      <View>
        <AntDesign name="infocirlceo" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}
