const { list, projectsListUrl } = require("./list");

// prep our mock data
const mockData = { "Genel": [] };

// do the mocking
const fetch = require("cross-fetch");
jest.mock(
  "cross-fetch",
  () =>
    jest.fn().mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(mockData) })
    ),
);

test("ensures fetch is called", async () => {
  // test phase
  const result = await list();

  // verifications
  expect(result).toBeDefined();
  expect(result).toEqual(mockData);
  expect(fetch).toHaveBeenCalled();
  expect(fetch).toHaveBeenCalledWith(projectsListUrl);
  expect(fetch).toHaveBeenCalledTimes(1);
});
