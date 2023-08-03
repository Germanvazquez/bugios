import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenEnum } from "../enums/ScreenEnum";
import { theme } from "../styles/theme";
import { ProfessionalStackNavigator } from "./ProfessionalStackNavigator";
import HomeSvg from "../assets/svg/HomeSvg";

const Tab = createBottomTabNavigator<any>();

const screenOptions = {
  tabBarActiveTintColor: theme.colors.primary,
  headerShown: false,
  tabBarStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 70,
    backgroundColor: theme.background.white,
    position: "absolute",
    overflow: "visible",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  tabBarHideOnKeyboard: true,
  tabBarLabelStyle: {
    margin: 0,
    fontSize: 11,
  },
};
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenEnum.BottomTab}
      screenOptions={screenOptions as any}
    >
      <Tab.Screen
        name={ScreenEnum.BottomTab}
        component={ProfessionalStackNavigator}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <HomeSvg width={20} height={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
