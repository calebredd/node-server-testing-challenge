const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove
};

async function insert(student) {
  const [id] = await db("students").insert(student, "id");
  return db("students")
    .where({ id })
    .first();
}
async function remove(id) {
  return db("students")
    .where({ id })
    .del();
}
