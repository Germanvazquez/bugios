import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
// import { AuthStackNavigator } from './AuthStackNavigator'
// import { DrawerNavigator } from './DrawerNavigator'
// import { Notification } from 'expo-notifications'
import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { theme } from "../styles/theme";
import { globalStyles } from "../styles/style";
import { BottomTabNavigator } from "./BottomTabNavigator";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};

export const Navigation = () => {
  const navigationRef = useRef<any>();

  return (
    <NavigationContainer theme={customTheme} ref={navigationRef}>
      <SafeAreaView style={globalStyles.AndroidSafeArea}>
        <StatusBar />
        <BottomTabNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};
