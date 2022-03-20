import { render } from "./test-utils";
import { App } from "./App";

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<App />);

    expect(getByText("Hello React typescript!")).toMatchInlineSnapshot(`
      <h1>
        Hello React typescript! 
      </h1>
    `);
  });
});
