import GameRoot from "@/app/(game)/index";
import { render } from "@testing-library/react-native";

describe("Game Root Route", () => {
  it("should render route component properly", () => {
    const instance = render(<GameRoot />);
    expect(instance.root).toBeDefined();
  });
});
