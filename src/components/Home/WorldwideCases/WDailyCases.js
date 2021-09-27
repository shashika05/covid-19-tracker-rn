import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import tailwind from "tailwind-rn";

//Loading
import Loading from "../../../Loading";

const WDailyCases = () => {
  const [worldData, setWorldData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://coronavirus-19-api.herokuapp.com/countries")
      .then((response) => {
        setWorldData({ ...response.data[0] });
        setLoading(false);
        // console.log(worldData[0]);
      })
      .catch((err) => console.log("setWorldData Error: ", err));
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return loading ? (
    <Loading />
  ) : (
    <View style={tailwind("items-center justify-center")}>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {numberWithCommas(worldData.todayCases)}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        New Cases
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
        {numberWithCommas(worldData.todayDeaths)}
      </Text>
      <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Deaths
      </Text>
      {/* <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
        Recoverd
      </Text>
      <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>00000</Text> */}
    </View>
  );
};

export default WDailyCases;
