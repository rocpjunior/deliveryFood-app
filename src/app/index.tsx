import { Banner } from "@/components/header/banner";
import { Header } from "@/components/header/header";
import { RestaurantVerticalList } from "@/components/header/list";
import { Restaurants } from "@/components/header/restaurants";
import { Search } from "@/components/header/search";
import { Section } from "@/components/header/section";
import { TrendingFoods } from "@/components/header/trending";
import Constants from "expo-constants";
import { ScrollView, View } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsHorizontalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em alta"
        size="text-2xl"
        label="Veja mais"
        action={() => console.log("Clicou no Veja mais =D")}
      />
      <TrendingFoods />

      <Section
        name="Famosos no iFood"
        size="text-xl"
        label="Veja todos"
        action={() => console.log("Clicou no Famosos =D")}
      />
      <Restaurants />

      <Section
        name="Restaurantes"
        size="text-xl"
        label="Veja todos"
        action={() => console.log("Clicou no Restaurantes =D")}
      />
      <RestaurantVerticalList />
    </ScrollView>
  );
}
