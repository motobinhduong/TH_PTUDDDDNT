import { fetchContacts } from "./utility/Api";
import { useEffect, useState } from "react";
import "react-native-gesture-handler"
import { Avatar, PaperProvider } from "react-native-paper";
import { Text, View } from "react-native";
import Contacts from "./Screens/Contacts";
import Profile from "./Screens/Profile";
import Favorites from "./Screens/Favorites";
import User from "./Screens/User";
import DetailListItem from "./components/DetailListItem";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./routers/BottomTabNavigator";



const App=()=>{
  

  return(
   <NavigationContainer>
    <PaperProvider>
      <BottomTabNavigator/>
    </PaperProvider>
   </NavigationContainer>
  )
}
export default App;