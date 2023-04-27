import { View, Text, Image, ScrollView ,StyleSheet } from "react-native";
import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
    serachView: {
      shadowColor: "#b4b4b4",
      shadowOffset: {
        width: 0,
        height: 13,
      },
      shadowOpacity: 0.24,
      shadowRadius: 9.86,
      elevation: 18,
    },
  });
const CardDetails = ({ route }) => {
    const navigation = useNavigation();
    const data = route?.params?.data;
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <ScrollView className="flex-1 px-6 py-4">

        <View className="relative bg-white shadow-2xl p-1 rounded-2xl " style={styles.serachView}>
        <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/27/11/16/contractor-1623889_960_720.jpg",
        }}
        className="w-full h-72 rounded-2xl object-cover"
      />
        </View>

        <View className="mt-12">
            <Text className="text-[22px] text-gray-800 font-extrabold">
              {`UserId is :- ${data?.id}`}
            </Text>
         <Text className="text-[18px] text-[#428288] font-bold">
            {data?.title}
         </Text>
         <Text className="tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.body}
         </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CardDetails;
