import renderer from "react-test-renderer";
import Users from "./Users";

test("renders Users component", () => {
  const componentData = renderer.create(<Users />).getInstance();

  expect(componentData.getUserList()).toBe("user list");
});
