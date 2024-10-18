import RootLayout from "@/app/_layout";
import { render } from "@testing-library/react-native";

describe("<RootLayout/>", () => {
  it("should render properly and be the redirect component", () => {
    const instance = render(<RootLayout />);
    expect(instance.root).toBeDefined();
  });
});
