const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(teacher) {
  const [id] = await db("teachers").insert(teacher, "id");
  return db("teachers")
    .where({ id })
    .first();
}
async function remove(id) {
  return db("teachers")
    .where({ id })
    .del();
}
