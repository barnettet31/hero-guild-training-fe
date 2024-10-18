import { View } from "react-native";
const useNavigation = jest.fn();
const Link = (props) => <View {...props} />;
const Slot = () => <></>;
const Redirect = (props) => <View testID={props.href} />;

export { useNavigation, Link, Slot, Redirect };
