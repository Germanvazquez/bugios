import { Text } from "react-native";

const TextCustom = (props: any) => {
  return <Text style={props.style}>{props.children}</Text>;
};

export default TextCustom;
