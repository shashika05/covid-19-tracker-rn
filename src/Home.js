import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        setData({ ...response.data.data });
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={tailwind("items-center justify-center")}>
      <Text style={{ fontFamily: "PoppinsBlack", fontSize: 60 }}>Home.js</Text>
    </View>
  );
}
