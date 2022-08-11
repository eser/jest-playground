const { list } = require("./list");

test("fetches list of projects", async () => {
  const result = await list();

  expect(result).toBeDefined();
});
