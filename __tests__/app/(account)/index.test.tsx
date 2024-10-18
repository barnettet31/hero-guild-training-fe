import AccountIndex from "@/app/(account)/index";
import { render } from "@testing-library/react-native";

describe("Root Account Route", () => {
  it("should render route component properly", () => {
    const instance = render(<AccountIndex />);
    expect(instance.root).toBeDefined();
  });
});
