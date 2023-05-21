import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-green-600 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold">Palmeiras !</Text>
      <StatusBar style="light" />
    </View>
  );
}
