import { Href, Link, useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

interface IOpacityLinkProps {
  to: Href<string | object>;
  children: React.ReactNode;
  classNames?: string;
  testId?: string;
}

export function OpacityLink({
  to,
  children,
  classNames,
  testId,
}: IOpacityLinkProps) {
  return (
    <Link testID={testId} className={classNames} asChild href={to}>
      <TouchableOpacity>{children}</TouchableOpacity>
    </Link>
  );
}
