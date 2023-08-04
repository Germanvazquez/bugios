import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomHeader from "../Components/Header/CustomHeader";
import ProfessionalCreate from "../Screen/ProfessionalCreate";
import ProfessionalView from "../Screen/ProfessionalView";
import { Platform } from "react-native";
import { OsTypes } from "../enums/OsEnum";
import { ScreenEnum } from "../enums/ScreenEnum";

const Stack = createNativeStackNavigator<any>();

const animationStyle =
  Platform.OS === OsTypes.Android ? "default" : "simple_push";

export const ProfessionalStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        animation: animationStyle,
      }}
      initialRouteName={ScreenEnum.ProfessionalPost}
    >
      <Stack.Screen
        name={ScreenEnum.ProfessionalPost}
        component={ProfessionalView}
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Profesionales"
              rightComponent={null}
            />
          ),
        }}
      />
      <Stack.Screen
        name={ScreenEnum.ProfessionalCreate}
        component={ProfessionalCreate}
        options={{
          header: ({ navigation }) => (
            <CustomHeader
              navigation={navigation}
              title="Crear perfil profesional"
              rightComponent={null}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
