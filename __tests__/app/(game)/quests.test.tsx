import Quests from "@/app/(game)/quests";
import { render } from "@testing-library/react-native";

describe("quests Route", () => {
  it("should render route component properly", () => {
    const instance = render(<Quests />);
    expect(instance.root).toBeDefined();
  });
});
