import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function AboutButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View>
        <Ionicons name="caret-back-circle-outline" size={30} color="black" />
      </View>
    </TouchableOpacity>
  );
}
