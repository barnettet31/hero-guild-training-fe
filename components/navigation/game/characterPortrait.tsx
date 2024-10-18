import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { OpacityLink } from "@/components/link";

export function CharacterPortrait() {
  return (
    <OpacityLink
      to="/character"
      classNames="self-center"
      testId="user-portrait"
    >
      <FontAwesome6 name="circle-user" size={36} color="white" />
    </OpacityLink>
  );
}
