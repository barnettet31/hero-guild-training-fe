import XpBar from "@/components/navigation/game/xpBar";
import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
describe("<CharacterPortrait/>", () => {
  it("Should render properly", async () => {
    const { getByTestId, rerender } = render(<XpBar progress={50} />);
    const parent = getByTestId("xp-bar");
    act(() => {
      fireEvent(parent, "layout", {
        nativeEvent: {
          layout: {
            width: 200,
          },
        },
      });
    });

    rerender(<XpBar progress={90} />);
    const child = getByTestId("child-xp");
    expect(child.props.style.width).toBeGreaterThan(0);
  });
});
