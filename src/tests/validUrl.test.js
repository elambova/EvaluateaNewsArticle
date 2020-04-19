import { validUrl } from "../client/js/validUrl";

describe("validUrl", () => {
  test("validUrl should be defined", () => {
    expect(validUrl).toBeDefined();
  });
});

describe("validUrl", () => {
  test("validUrl should be a function", () => {
    expect(typeof validUrl).toBe("function");
  });
});

describe("validUlr", () => {
  const url =
    "https://www.bbc.com/news/av/uk-52312019/coronavirus-the-story-of-captain-tom-s-walk";
  test("checked validUrl worked correctly", () => {
    const response = validUrl(url);
    expect(response).toBe(true);
    expect(response).toBeDefined();
  });
});
