import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const DailyCases = ({ localData, dataFromApi }) => {
  return (
    <View style={tailwind("items-center justify-center")}>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        New Cases
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {localData.cases_count}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Deaths
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {dataFromApi.local_new_deaths}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Recoverd
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {localData.recoveries_count}
      </Text>
    </View>
  );
};

export default DailyCases;
