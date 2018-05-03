const server = require("../index.js");
const { mathify } = require("./helpers/mathHelper")

describe("Can do maths", () => {
  test("10 * 5 / 2", async () => {
    expect(await mathify(10, 5, 2)).toEqual(25);
  });
});

afterAll(async () => {
  await server.close();
})