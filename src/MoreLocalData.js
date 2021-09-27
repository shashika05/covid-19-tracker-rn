import React, { useState, useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import axios from "axios";
import tailwind from "tailwind-rn";

//Loading
import Loading from "./Loading";

const MoreLocalData = () => {
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [dataFromApi, setData] = useState({});
  const [localData, setLocalData] = useState({});

  useEffect(() => {
    axios
      .get("https://hpb.health.gov.lk/api/get-statistical-history-data")
      .then((res) => {
        setLocalData({ ...res.data.data[0] });
        // console.log(localData);
        setLoading1(false);
      })
      .catch((err) => console.log("localData Error: ", err));
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((response) => {
        setData({ ...response.data.data });
        // console.log(dataFromApi);
        setLoading2(false);
      })
      .catch((err) => console.log("dataFromApi Error: ", err));
  }, []);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return loading1 || loading2 ? (
    <Loading />
  ) : (
    <View
      style={[
        tailwind("items-center justify-center h-full"),
        { backgroundColor: "#e3eaff" },
      ]}
    >
      <ImageBackground
        source={require("../assets/bg-1.png")}
        style={[
          tailwind("items-center justify-center h-full w-full"),
          { flex: 1 },
        ]}
      >
        <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
          {numberWithCommas(localData.cases_count)}
        </Text>
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
          New Cases
        </Text>
        <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
          {numberWithCommas(dataFromApi.local_new_deaths)}
        </Text>
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
          Deaths
        </Text>
        <Text style={{ fontFamily: "PoppinsLight", fontSize: 32 }}>
          {numberWithCommas(localData.recoveries_count)}
        </Text>
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 20 }}>
          Recoverd
        </Text>
        {/* <Image
        source={require("../assets/safe-mask-bg.png")}
        style={[
          tailwind("w-72 absolute"),
          { resizeMode: "cover", width: "auto", height: 100 },
        ]}
      /> */}
      </ImageBackground>
    </View>
  );
};

export default MoreLocalData;
