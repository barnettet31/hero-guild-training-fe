import { CharacterPortrait } from "@/components/navigation/game/characterPortrait";
import { render } from "@testing-library/react-native";
describe("<CharacterPortrait/>", () => {
  it("Should render properly", () => {
    const { getByTestId } = render(<CharacterPortrait />);
    const parent = getByTestId("user-portrait");
    expect(parent).toBeDefined();
  });
});
