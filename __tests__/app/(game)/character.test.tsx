import Character from "@/app/(game)/character";
import { render } from "@testing-library/react-native";

describe("Character Route", () => {
  it("should render route component properly", () => {
    const instance = render(<Character />);
    expect(instance.root).toBeDefined();
  });
});
