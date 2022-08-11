const fetch = require("cross-fetch");

const jsonFetcher = async function jsonFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

module.exports = jsonFetcher;
