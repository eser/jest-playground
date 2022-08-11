const jsonFetcher = require("./json-fetcher");

const projectsListUrl = "https://raw.githubusercontent.com/acikkaynak/acikkaynak/development/projects.json";

const list = function list() {
  return jsonFetcher(projectsListUrl);
}

module.exports = { list, projectsListUrl };
