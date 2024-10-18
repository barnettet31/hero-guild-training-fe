import GameHeader from "@/components/navigation/game/gameHeader";
import { render } from "@testing-library/react-native";
describe("<CharacterPortrait/>", () => {
  it("Should render properly", () => {
    const { getByTestId } = render(<GameHeader />);
  });
});
