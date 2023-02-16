import { render } from "@testing-library/react";
import { ObjectDisplay } from "./ObjectDisplay";

test("should render", () => {
  const { findByTestId } = render(
    <ObjectDisplay
      json={{ string: "bar", bool: true, number: 42, null: null }}
    />
  );
  expect(findByTestId("object-display")).toBeTruthy();
});

test("should render", () => {
  const { findByTestId } = render(
    <ObjectDisplay
      json={{
        string: "bar",
        bool: true,
        number: 42,
        null: null,
        array: ["bar", true, 42, null],
        object: { nested: true },
      }}
    />
  );
  expect(findByTestId("object-display")).toBeTruthy();
});
