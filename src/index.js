const { list } = require("./list/list");

const main = async function main() {
  const result = await list();

  console.log(result);
};

main();
