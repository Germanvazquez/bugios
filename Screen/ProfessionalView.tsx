import { TouchableOpacity, View } from "react-native";
import TextCustom from "../Components/Ui/TextCustom";
import { useNavigation } from "@react-navigation/native";
import { ScreenEnum } from "../enums/ScreenEnum";
import { theme } from "../styles/theme";

const ProfessionalView = () => {
  console.log("ProfessionalView");
  const navigate = useNavigation<any>();
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigate.push(ScreenEnum.ProfessionalCreate)}
        style={{
          width: 100,
          height: 40,
          backgroundColor: theme.colors.primary,
        }}
      >
        <TextCustom style={{ color: "white" }}>Post</TextCustom>
      </TouchableOpacity>
    </View>
  );
};
export default ProfessionalView;
