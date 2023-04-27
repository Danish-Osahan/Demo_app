import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        // "https://jsonplaceholder.typicode.com/photos"
        "https://jsonplaceholder.typicode.com/posts?_limit=12"
      );
      //   console.log(data);
      setMainData(response.data);
      //   console.log(response.data);
      //   console.log(mainData)
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {}
  });

  return (
    <SafeAreaView className="flex-1 relative bg-white ">
      <View className="flex flex-row items-center justify-center  mt-[40px]">
        <Text className="text-[40px] text-[#0B646B] font-bold">Demo App</Text>
      </View>

      <ScrollView>
        <View className="flex-row justify-between flex-wrap items-center px-4 mt-2 mb-4 ">
          {mainData.length > 0 ? (
            <>
              {mainData?.map((data, i) => (
                <Card
                  key={i}
                  title={data?.title}
                  body={data?.body}
                  data={data}
                />
              ))}
            </>
          ) : (
            <>
              <View className="w-full h-[400px]   justify-center items-center space-y-8 mt-4">
                <Text className="text-[36px] text-[#527283] font-bold">
                  Ooops...No Data Found
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
