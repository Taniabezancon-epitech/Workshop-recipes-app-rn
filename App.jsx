import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/Drawer/Drawer";
import RecepiesProvider from "./src/providers/RecepiesProvider";
import { recepies as recepiesProvider } from "./src/data/recepies";
import Home from "./src/screens/Home";

export default function App() {
  const [recepies, setRecepies] = React.useState(recepiesProvider.recepies);
  const [favorites, setFavorites] = React.useState([]);
  const [myRecepies, setMyRecepies] = React.useState([]);
  const value = {
    recepies,
    setRecepies,
    favorites,
    setFavorites,
    myRecepies,
    setMyRecepies,
  };
  return (
      <RecepiesProvider recepies={value}>
        <Home />
      </RecepiesProvider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
