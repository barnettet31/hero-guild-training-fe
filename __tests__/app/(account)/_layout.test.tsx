import AccountLayout from "@/app/(account)/_layout";
import { render } from "@testing-library/react-native";

describe("AccountLayout Route", () => {
  it("should render route component properly", () => {
    const instance = render(<AccountLayout />);
    expect(instance.root).toBeDefined();
  });
});
