import GameLayout from "@/app/(game)/_layout";
import { render } from "@testing-library/react-native";

describe("Game Layout Route", () => {
  it("should render route component properly", () => {
    const instance = render(<GameLayout />);
    expect(instance.root).toBeDefined();
  });
});
