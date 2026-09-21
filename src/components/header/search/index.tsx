import { Feather } from "@react-native-vector-icons/feather";
import { TextInput, View } from "react-native";

export function Search() {
  return (
    <View className="w-full flex-row h-14 rounded-full items-center gap-2 px-4 bg-white">
      <Feather name="search" size={24} color="#64748b" />

      <TextInput
        placeholder="Procure seu alimentineo!"
        className="w-full h-full flex-1 bg-white"
      />
    </View>
  );
}
