import Bag from "@/app/(account)/bag";
import { render } from "@testing-library/react-native";

describe("Bag Route", () => {
  it("should render route component properly", () => {
    const instance = render(<Bag />);
    expect(instance.root).toBeDefined();
  });
});
