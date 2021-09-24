import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const TotalCases = ({ localData, dataFromApi }) => {
  return (
    <View style={tailwind("items-center justify-center")}>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Total Confirmed Cases
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {localData.total_cases_count}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Deaths
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {dataFromApi.local_deaths}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Recoverd
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {dataFromApi.local_recovered}
      </Text>
    </View>
  );
};

export default TotalCases;
