const { list, projectsListUrl } = require("./list");

// do the mocking
const jsonFetcher = require("./json-fetcher");
jest.mock("./json-fetcher");

test("ensures json-fetcher is called", async () => {
  // prep our mock data
  const mockData = { "Genel": [] };

  jsonFetcher.mockResolvedValue(mockData);

  // test phase
  const result = await list();

  // verifications
  expect(result).toBeDefined();
  expect(result).toEqual(mockData);
  expect(jsonFetcher).toHaveBeenCalled();
  expect(jsonFetcher).toHaveBeenCalledWith(projectsListUrl);
  expect(jsonFetcher).toHaveBeenCalledTimes(1);
});
