import { getData, postData } from "../client/js/request";

describe("GET request", () => {
  test("getData should be defined", () => {
    expect(getData).toBeDefined();
  });
});

describe("GET request", () => {
  test("getData should be a function", () => {
    expect(typeof getData).toBe("function");
  });
});

describe("POST request", () => {
  test("postData should be defined", () => {
    expect(postData).toBeDefined();
  });
});

describe("POST request", () => {
  test("postData should be a function", () => {
    expect(typeof postData).toBe("function");
  });
});
