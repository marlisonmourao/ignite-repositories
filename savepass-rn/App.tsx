import { View, StatusBar } from "react-native";

import {
  useFonts,
  Rubik_300Light,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

import { Loading } from "./src/components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoading] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        {fontsLoading ? <AppRoutes /> : <Loading />}
      </NavigationContainer>
    </>
  );
}
