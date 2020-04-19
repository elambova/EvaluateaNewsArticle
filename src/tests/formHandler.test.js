import { handleSubmit } from "../client/js/formHandler";

describe("formHandler", () => {
  test("handleSubmit should be defined", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe("formHandler", () => {
  test("handleSubmit should be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
