import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, body,data }) => {
  const styles = StyleSheet.create({
    serachView: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.19,
      shadowRadius: 5.62,
      elevation: 6,
    },
  });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.serachView}
      className=" rounded-md w-[175px] border-gray-950  space-y-2 px-2 py-2 bg-white my-2 "
      onPress={() => {
        navigation.navigate("Card", { data: data });
      }}
    >
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2016/08/27/11/16/contractor-1623889_960_720.jpg",
        }}
        className="rounded-md w-full h-40 object-cover"
      />
      {title ? (
        <>
          <Text className="text-[18px] text-[#428288] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
          </Text>
          <Text className="tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {body?.length > 80 ? `${body.slice(0, 80)}...` : body}
          </Text>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default Card;
