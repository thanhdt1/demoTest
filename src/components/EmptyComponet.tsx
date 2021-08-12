import React from "react";
import { View, Text, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const EmptyComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: height / 2 - 100,
      }}
    >
      <Text style={{ fontSize: 24, color: "lightgray" }}>Không có dữ liệu</Text>
    </View>
  );
};
export default EmptyComponent;
