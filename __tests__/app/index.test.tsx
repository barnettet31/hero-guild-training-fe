import IndexComponent from "@/app/index";
import { render } from "@testing-library/react-native";
describe("root index", () => {
  it("should redirect to game", () => {
    const { getByTestId } = render(<IndexComponent />);
    const redirect = getByTestId("/(game)/");
    expect(redirect).toBeDefined();
  });
});
